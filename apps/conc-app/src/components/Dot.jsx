import React from 'react';

var dotStyle = {
    position: 'absolute',
    background: '#61dafb',
    font: 'normal 15px sans-serif',
    textAlign: 'center',
    cursor: 'pointer',
};

class Dot extends React.Component {
    constructor() {
        super();
        this.state = { hover: false };
    }
    enter() {
        this.setState({
            hover: true
        });
    }
    leave() {
        this.setState({
            hover: false
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.x !== this.props.x ||
            nextProps.y !== this.props.y ||
            nextProps.size !== this.props.size ||
            nextProps.text !== this.props.text ||
            nextState.hover !== this.state.hover
        );
    }
    
    render() {
        var props = this.props;
        var s = props.size * 1.3;
        var style = {
            ...dotStyle,
            width: s + 'px',
            height: s + 'px',
            left: (props.x) + 'px',
            top: (props.y) + 'px',
            borderRadius: (s / 2) + 'px',
            lineHeight: (s) + 'px',
            background: this.state.hover ? '#ff0' : dotStyle.background
        };
        return (
            <div style={style} onMouseEnter={() => this.enter()} onMouseLeave={() => this.leave()}>
                {this.state.hover ? '*' + props.text + '*' : props.text}
            </div>
        );
    }
}

export default React.memo(Dot);