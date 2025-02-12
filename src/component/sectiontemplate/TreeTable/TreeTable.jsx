import React, { useEffect } from 'react';
import "./style.scss";
import $ from 'jquery';

const TreeTable = ({ items }) => {

  useEffect(() => {
    // This is where you will run your jQuery code.
    // Make sure the DOM is fully rendered before initializing jQuery
    $(document.body).delegate('.expand', 'click', function () {
      const level = $(this).attr('data-level');
      const partLevel = $(this).attr('data-part-level');
      const allLevel = $(this).attr('data-all-level');
      const isOpen = $(this).attr('data-is-open');
      const trsDiv = $('.tree-table').find('tbody tr');
      const trsArray = $(trsDiv);

      if (isOpen === '1') {
        for (let i = 0; i < trsArray.length - 1; i++) {
          const tempTr = $(trsArray[i]);
          const trLevel = tempTr.attr('data-level');
          const trPartLevel = tempTr.attr('data-part-level');
          const trAllLevel = tempTr.attr('data-all-level');
          const contain = trAllLevel.split('_')[Number(level)];
          const curr = partLevel.split('_');
          if (contain && contain === curr[curr.length - 1] && partLevel !== trPartLevel) {
            tempTr.removeClass('show');
            tempTr.addClass('hidden');
          }
        }
        $(this).text('+');
        $(this).attr('data-is-open', '0');
      } else {
        for (let i = 0; i < trsArray.length - 1; i++) {
          const tempTr = $(trsArray[i]);
          const trLevel = tempTr.attr('data-level');
          const trPartLevel = tempTr.attr('data-part-level');
          const trAllLevel = tempTr.attr('data-all-level');
          const contain = trAllLevel.split('_')[Number(level)];
          const curr = partLevel.split('_');
          if (contain && contain === curr[curr.length - 1] && Number(trLevel) > Number(level)) {
            const span = $(tempTr.children()[0].children[Number(trLevel)]);
            const isOpen = $(span).attr('data-is-open');
            const childrenCount = $(span).attr('data-count');
            tempTr.removeClass('hidden');
            tempTr.addClass('show');
            if (isOpen && isOpen === '0' && Number(childrenCount) > 0) {
              i = i + Number(childrenCount);
            } else {
              if (isOpen === '1') {
                $(span).attr('data-is-open', '1');
                $(span).text('-');
                tempTr.removeClass('hidden');
                tempTr.addClass('show');
              }
            }
          }
        }
        $(this).text('-');
        $(this).attr('data-is-open', '1');
      }
    });
  }, []);

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
            allLevel: level === 0 ? v.id : [allLevel, v.id].join('_'),
          };
          return [temp].concat(...temp.children);
        });
    };

    return [].concat(...getChild({ id: undefined }, 0, undefined));
  };

  function countChildren(node) {
    let sum = 0;
    const children = node && node.length ? node : node.children;
    let i = children && children.length; // Change const to let here
  
    if (!i) {
      sum = 0;
    } else {
      while (--i >= 0) {
        if (node && node.length) {
          sum++;
          countChildren(children[i]);
        } else {
          sum += countChildren(children[i]);
        }
      }
    }
    return sum;
  }
  

  const createRows = () => {
    const rows = [];
    const opts = flatListToTree(items);

    opts.forEach((item) => {
      const count = countChildren(item);
      const row = (
        <tr
          key={item.allLevel}
          data-part-level={item.partLevel}
          data-all-level={item.allLevel}
          data-level={item.level}
          data-count={count}
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
                    data-is-open="1"
                  >
                    -
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
      rows.push(row);
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
