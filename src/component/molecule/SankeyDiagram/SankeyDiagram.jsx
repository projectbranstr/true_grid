import React, { useEffect, useLayoutEffect, useRef } from 'react';

const SankeyDiagram = ({ sankeyData }) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!sankeyData) {
      console.error("Sankey data is missing!");
      return;
    }

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadCharts = async () => {
      try {
        await loadScript("https://code.highcharts.com/highcharts.js");
        await loadScript("https://code.highcharts.com/modules/sankey.js");

        if (sankeyData && containerRef.current) {
          window.Highcharts.chart(containerRef.current, sankeyData);
        }
      } catch (error) {
        console.error("Error loading Highcharts scripts:", error);
      }
    };

    loadCharts();

    return () => {
      const scripts = document.querySelectorAll('script[src^="https://code.highcharts.com"]');
      scripts.forEach(script => document.body.removeChild(script));
    };
  }, []);

  return <div ref={containerRef} style={{ margin: "7rem 0rem 5rem 0rem" }} />;
};

export default SankeyDiagram;
