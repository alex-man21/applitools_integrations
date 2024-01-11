import React from 'react';

export default {
  title: 'Demo',
};

export const StaticText = () => {
  return (
    <div>
      This text is static and should <strong>not</strong> be ignored: <span style={{color: 'red'}} className="ignore-this">1594565350172</span>
    </div>
  )
}

StaticText.story = {
  name: 'Static text without ignore region',
}

export const DynamicText = () => {
  return (
    <div>
      This text is dynamic and should be ignored: <span style={{color: 'red'}} className="ignore-this">{Date.now()}</span>
    </div>
  )
}

DynamicText.story = {
  name: 'Dynamic text with ignore region',
  parameters: {
    eyes: {
      ignoreRegions: [
        {
          selector: '.ignore-this'
        }
      ]
    }
  }
}