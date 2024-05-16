import React, { useRef, useState, useEffect } from 'react';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';

import TopBar from '../components/TopBar';
import Widget from '../components/Widget';
import useComponentSize from '../hooks/useComponentSize';

const initialLayouts = {
  lg: [
    { i: 'b', x: 1, y: 0, w: 3, h: 2, isDraggable: true, isResizable: true },
    { i: 'd', x: 4, y: 0, w: 2, h: 2, isDraggable: true, isResizable: true },
    { i: 'a', x: 0, y: 0, w: 1, h: 2, isDraggable: true, isResizable: true },
    { i: 'c', x: 3, y: 2, w: 1, h: 2, isDraggable: true, isResizable: true },
  ],
};

const originalWidgets = ['b', 'd', 'a', 'c'];

function Content() {
  const ref = useRef(null);
  const size = useComponentSize(ref);

  const [widgets, setWidgets] = useState(getFromLS('widgets') || originalWidgets);
  const [layouts, setLayouts] = useState(getFromLS('layouts') || initialLayouts);

  useEffect(() => {
    const savedLayouts = getFromLS('layouts');
    const savedWidgets = getFromLS('widgets');
    if (savedLayouts) {
      console.log('Loaded layouts from localStorage:', savedLayouts);
      setLayouts(savedLayouts);
    }
    if (savedWidgets) {
      console.log('Loaded widgets from localStorage:', savedWidgets);
      setWidgets(savedWidgets);
    }
  }, []);

  const onLayoutChange = (currentLayout, allLayouts) => {
    console.log('Layouts changed:', allLayouts);
    setLayouts(allLayouts);
    saveToLS('layouts', allLayouts);
  };

  const onLayoutSave = () => {
    console.log('Manually saving layouts:', layouts);
    saveToLS('layouts', layouts);
    saveToLS('widgets', widgets);
  };

  const onRemoveWidget = (widgetId) => {
    const newWidgets = widgets.filter((i) => i !== widgetId);
    console.log(widgetId);
    setWidgets(newWidgets);
    saveToLS('widgets', newWidgets);
  };

  const onAddWidget = (widgetId) => {
    const newWidgets = [...widgets, widgetId];
    setWidgets(newWidgets);
    saveToLS('widgets', newWidgets);
  };

  return (
    <>
      <TopBar
        onLayoutSave={onLayoutSave}
        widgets={widgets}
        onRemoveWidget={onRemoveWidget}
        originalWidgets={originalWidgets}
        onAddWidget={onAddWidget}
      >
      </TopBar>
      <div ref={ref} style={{ width: '100%', height: '100%' }}>
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          onLayoutChange={onLayoutChange}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          width={size.width}
        >
          {widgets.map((key) => (
            <div
              key={key}
            >
              <Widget id={key} onRemoveWidget={onRemoveWidget} />
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </>
  );
}

export default Content;

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
    } catch (e) {
      console.error('Error loading from localStorage', e);
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    const storedData = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
    storedData[key] = value;
    global.localStorage.setItem('rgl-8', JSON.stringify(storedData));
  }
}
