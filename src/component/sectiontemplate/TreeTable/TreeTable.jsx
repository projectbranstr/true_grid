import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';

const TreeTable = ({ items }) => {
  const [expandedRows, setExpandedRows] = useState({});

  useEffect(() => {
    const handleExpandCollapse = (event) => {
      const $button = $(event.target);
      const level = $button.data('level');
      const partLevel = $button.data('part-level');
      const isOpen = $button.data('is-open');

      // Toggling expanded rows state
      setExpandedRows((prev) => ({
        ...prev,
        [partLevel]: isOpen === '1' ? '0' : '1',
      }));

      // Update the button text
      $button.text(isOpen === '1' ? '+' : '-');
      $button.data('is-open', isOpen === '1' ? '0' : '1');
    };

    // Attach click handler to .expand buttons
    $('.expand').on('click', handleExpandCollapse);

    // Cleanup on component unmount
    return () => {
      $('.expand').off('click', handleExpandCollapse);
    };
  }, []);

  // Convert the flat list to a tree structure
  const flatListToTree = (items) => {
    const getChild = (item, level, allLevel) => {
      return items
        .filter((v) => v.parentId === item.id)
        .map((v) => {
          const temp = {
            ...v,
            level,
            children: getChild(v, level + 1, level === 0 ? v.id : `${allLevel}_${v.id}`),
            partLevel: level === 0 ? v.id : `${v.parentId}_${v.id}`,
            allLevel: level === 0 ? v.id : `${allLevel}_${v.id}`,
          };
          return [temp].concat(...temp.children);
        });
    };

    return getChild({ id: undefined }, 0, undefined).flat();
  };

  // Count the number of children for a given node
  const countChildren = (node) => {
    if (!node || !node.children || !node.children.length) return 0;
    return node.children.reduce((sum, child) => sum + countChildren(child), node.children.length);
  };

  // Create table rows from the flat-to-tree structure
  const createRows = () => {
    const rows = [];
    const opts = flatListToTree(items);

    opts.forEach((item) => {
      const count = countChildren(item);
      const isOpen = expandedRows[item.partLevel] === '1';
      
      rows.push(
        <tr
          key={item.allLevel}
          data-part-level={item.partLevel}
          data-all-level={item.allLevel}
          data-level={item.level}
          data-count={count}
          className={isOpen ? 'show' : 'hidden'} // Toggle visibility based on isOpen state
        >
          <td>
            {Array.from({ length: item.level + 1 }).map((_, idx) => (
              <span
                key={idx}
                className="tree-table-space-block"
                data-part-level={item.partLevel}
                data-all-level={item.allLevel}
                data-level={item.level}
              >
                {idx === item.level && item.children && item.children.length > 0 ? (
                  <button
                    className="expand"
                    data-level={item.level}
                    data-part-level={item.partLevel}
                    data-all-level={item.allLevel}
                    data-is-open={isOpen ? '1' : '0'}
                  >
                    {isOpen ? '-' : '+'}
                  </button>
                ) : (
                  <span className="last-block"></span>
                )}
              </span>
            ))}
            <span className="tree-table-td-content">{item.id}</span>
          </td>
          <td>{item.from}</td>
          <td>{item.subject}</td>
          <td>{item.sentDate}</td>
          <td>{item.from}</td>
        </tr>
      );
    });

    return rows;
  };

  return (
    <div className="container">
      <h1>Simple Tree Table View Example</h1>
      <div className="tree-table-wrap">
        <table className="tree-table">
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th>Column 4</th>
              <th>Column 5</th>
            </tr>
          </thead>
          <tbody>{createRows()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default TreeTable;
