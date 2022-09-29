import './AdDesigner.css'

const AdDesigner = () => {
  return (
    <div className='AdDesigner'>
        <h2>Ad Designer</h2>
        <div className='VoteFor_Box'>
            <p>Vote For</p>
            <p>Strawberry</p>
        </div>
        <div className="WhatToSupport">
            <p>What to Support</p>
            <button>Vanilla</button>
            <button>Chocolate</button>
            <button>Strawberry</button>
        </div>
        <div className="ColorTheme">
            <p>Color Theme</p>
            <button>Light</button>
            <button>Dark</button>
        </div>
        <div className="FontSize">
            <p>Font Size</p>
            <div className="FontAdjuster">
                <button>Down</button>
                <p>44</p>
                <button>Up</button>
            </div>
        </div>
    </div>
  )
};

export default AdDesigner;
