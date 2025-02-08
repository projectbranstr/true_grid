import React, { useEffect } from 'react';
import './sankeydiagram.scss';  // Import the SCSS file for styling
import * as d3 from 'd3';
import { sankey, sankeyLinkHorizontal } from 'd3-sankey'; // Import sankey from d3-sankey

const SankeyDiagram = () => {
  // useEffect(() => {
  //   const container = d3.select('.snakey_container');
  //   const source = 'https://beta.observablehq.com/@mbostock/d3-sankey-diagram';
  //   const url = 'https://gist.githubusercontent.com/mbostock/ca9a0bb7ba204d12974bca90acc507c0/raw/398136b7db83d7d7fd89181b080924eb76041692/energy.json';

  //   // Basic setup
  //   container.append('h2').text('Sankey Diagram');
  //   container.append('p').text('Feel free to zoom in. The text is a tad small.');
  //   container.append('a').attr('href', source).text('Source.');

  //   const tooltip = container.append('div').attr('id', 'tooltip');

  //   // Dimensions and margins for the SVG container
  //   const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  //   const width = 1000 + (margin.left + margin.right);
  //   const height = 600 + (margin.top + margin.bottom);

  //   const containerFrame = container
  //     .append('svg')
  //     .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`)
  //     .append('g')
  //     .attr('transform', `translate(${margin.left}, ${margin.top})`);

  //   // Add a transparent rectangle for zoom functionality
  //   containerFrame.append('rect')
  //     .attr('x', 0)
  //     .attr('y', 0)
  //     .attr('width', width)
  //     .attr('height', height)
  //     .attr('fill', 'transparent');

  //   function zoomFunction() {
  //     const { x, y, k } = d3.event.transform;
  //     containerFrame.attr('transform', `translate(${x} ${y}) scale(${k})`);
  //   }

  //   const zoom = d3.zoom().scaleExtent([1, 5]).on('zoom', zoomFunction);
  //   containerFrame.call(zoom);

  //   // Function to create the Sankey diagram
  //   function createSankeyDiagram(data, frame) {
  //     const color = d3.scaleOrdinal(d3.schemeSet3);
  //     const sankeyDiagram = sankey().extent([[0, 0], [width, height]]);
  //     const { nodes, links } = sankeyDiagram(data);

  //     const defs = frame.append('defs');
  //     const linearGradients = defs
  //       .selectAll('linearGradient')
  //       .data(links)
  //       .enter()
  //       .append('linearGradient')
  //       .attr('id', d => `gradient${d.index}`)
  //       .attr('x1', '0%')
  //       .attr('y1', '50%')
  //       .attr('x2', '100%')
  //       .attr('y2', '50%');

  //     linearGradients.append('stop')
  //       .attr('offset', '0%')
  //       .attr('stop-color', d => color(d.source.index));

  //     linearGradients.append('stop')
  //       .attr('offset', '100%')
  //       .attr('stop-color', d => color(d.target.index));

  //     const sankeyLinks = sankeyLinkHorizontal();
  //     frame.selectAll('path.link')
  // .data(links)
  // .enter()
  // .append('path')
  // .attr('class', 'link')
  // .attr('d', sankeyLinks)
  // .attr('fill', 'none')
  // .attr('stroke', d => `url(#gradient${d.index})`)
  // .attr('stroke-width', d => d.width)
  // .attr('opacity', 0.5)
  // .on('mouseenter', function (event, d) { // Pass event as the first argument
  //   d3.select(this).transition().attr('opacity', 1);
  //   tooltip.append('p').html(`<strong>${d.source.name}</strong> - <strong>${d.target.name}</strong>`);
  //   tooltip.append('p').html(`Value: <strong>${d.value}</strong>`);
  //   tooltip.style('opacity', 1)
  //     .style('left', `${event.pageX + 10}px`)  // Offset for positioning
  //     .style('top', `${event.pageY + 10}px`);
  // })
  // .on('mouseout', function () {
  //   d3.select(this).transition().attr('opacity', 0.5);
  //   tooltip.style('opacity', 0).selectAll('p').remove();
  // });

  //     frame.selectAll('rect.node')
  //       .data(nodes)
  //       .enter()
  //       .append('rect')
  //       .attr('class', 'node')
  //       .attr('x', d => d.x0)
  //       .attr('y', d => d.y0)
  //       .attr('width', d => d.x1 - d.x0)
  //       .attr('height', d => d.y1 - d.y0)
  //       .attr('pointer-events', 'none')
  //       .attr('stroke', '#555')
  //       .attr('stroke-width', '1px')
  //       .attr('fill', d => color(d.index));

  //     frame.selectAll('text.node')
  //       .data(nodes)
  //       .enter()
  //       .append('text')
  //       .text(d => d.name)
  //       .attr('font-size', '0.75rem')
  //       .attr('fill', '#111')
  //       .attr('x', (d) => (d.sourceLinks.length > 0 ? d.x0 + sankeyDiagram.nodeWidth() + 5 : d.x0 - 5))
  //       .attr('y', d => (d.y1 + d.y0) / 2)
  //       .attr('pointer-events', 'none')
  //       .attr('alignment-baseline', 'middle')
  //       .attr('text-anchor', d => (d.sourceLinks.length > 0 ? 'start' : 'end'));
  //   }

  //   fetch(url)
  //     .then(response => response.json())
  //     .then(json => createSankeyDiagram(json, containerFrame));

  // }, []);
  useEffect(() => {
    // Select the container and set it up
    const container = d3.select('.snakey_container');
    const source = 'https://beta.observablehq.com/@mbostock/d3-sankey-diagram';
    const url = 'https://gist.githubusercontent.com/mbostock/ca9a0bb7ba204d12974bca90acc507c0/raw/398136b7db83d7d7fd89181b080924eb76041692/energy.json';
  
    // Clear out any previous content in the container before adding new content
    container.selectAll('*').remove();  // This will clear any existing elements in the container
  
    // Basic setup
    // container.append('h2').text('Sankey Diagram');
    // container.append('p').text('Feel free to zoom in. The text is a tad small.');
    // container.append('a').attr('href', source).text('Source.');
  
    const tooltip = container.append('div').attr('id', 'tooltip');
  
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const width = 1000 + (margin.left + margin.right);
    const height = 600 + (margin.top + margin.bottom);
  
    const containerFrame = container
      .append('svg')
      .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
  
    containerFrame.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'transparent');
  
    function zoomFunction() {
      const { x, y, k } = d3.event.transform;
      containerFrame.attr('transform', `translate(${x} ${y}) scale(${k})`);
    }
  
    const zoom = d3.zoom().scaleExtent([1, 5]).on('zoom', zoomFunction);
    containerFrame.call(zoom);
  
    function createSankeyDiagram(data, frame) {
      const color = d3.scaleOrdinal(d3.schemeSet3);
      const sankeyDiagram = sankey().extent([[0, 0], [width, height]]);
      const { nodes, links } = sankeyDiagram(data);
  
      const defs = frame.append('defs');
      const linearGradients = defs
        .selectAll('linearGradient')
        .data(links)
        .enter()
        .append('linearGradient')
        .attr('id', d => `gradient${d.index}`)
        .attr('x1', '0%')
        .attr('y1', '50%')
        .attr('x2', '100%')
        .attr('y2', '50%');
  
      linearGradients.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', d => color(d.source.index));
  
      linearGradients.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', d => color(d.target.index));
  
      const sankeyLinks = sankeyLinkHorizontal();
      frame.selectAll('path.link')
        .data(links)
        .enter()
        .append('path')
        .attr('class', 'link')
        .attr('d', sankeyLinks)
        .attr('fill', 'none')
        .attr('stroke', d => `url(#gradient${d.index})`)
        .attr('stroke-width', d => d.width)
        .attr('opacity', 0.5)
        .on('mouseenter', function (event, d) {
          d3.select(this).transition().attr('opacity', 1);
          tooltip.append('p').html(`<strong>${d.source.name}</strong> - <strong>${d.target.name}</strong>`);
          tooltip.append('p').html(`Value: <strong>${d.value}</strong>`);
          tooltip.style('opacity', 1)
            .style('left', `${event.pageX + 10}px`)
            .style('top', `${event.pageY + 10}px`);
        })
        .on('mouseout', function () {
          d3.select(this).transition().attr('opacity', 0.5);
          tooltip.style('opacity', 0).selectAll('p').remove();
        });
  
      frame.selectAll('rect.node')
        .data(nodes)
        .enter()
        .append('rect')
        .attr('class', 'node')
        .attr('x', d => d.x0)
        .attr('y', d => d.y0)
        .attr('width', d => d.x1 - d.x0)
        .attr('height', d => d.y1 - d.y0)
        .attr('pointer-events', 'none')
        .attr('stroke', '#555')
        .attr('stroke-width', '1px')
        .attr('fill', d => color(d.index));
  
      frame.selectAll('text.node')
        .data(nodes)
        .enter()
        .append('text')
        .text(d => d.name)
        .attr('font-size', '0.75rem')
        .attr('fill', '#111')
        .attr('x', (d) => (d.sourceLinks.length > 0 ? d.x0 + sankeyDiagram.nodeWidth() + 5 : d.x0 - 5))
        .attr('y', d => (d.y1 + d.y0) / 2)
        .attr('pointer-events', 'none')
        .attr('alignment-baseline', 'middle')
        .attr('text-anchor', d => (d.sourceLinks.length > 0 ? 'start' : 'end'));
    }
  
    fetch(url)
      .then(response => response.json())
      .then(json => createSankeyDiagram(json, containerFrame));
  
    return () => {
      // Cleanup if necessary (unmount or cleanup state)
      container.selectAll('*').remove();  
    };
  
  }, []);
  return (
    <div className="snakey_container"></div>
  );
};

export default SankeyDiagram;
