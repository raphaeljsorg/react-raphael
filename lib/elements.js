'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');
var Utils = require('./utils');

var Paper = function (_React$Component) {
    _inherits(Paper, _React$Component);

    function Paper(props) {
        _classCallCheck(this, Paper);

        var _this = _possibleConstructorReturn(this, (Paper.__proto__ || Object.getPrototypeOf(Paper)).call(this, props));

        _this.state = {
            loading: false
        };
        return _this;
    }

    _createClass(Paper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var container = ReactDOM.findDOMNode(this.refs.container);
            var paper = Utils.createPaper(container, this.props);
            this.paper = paper;
            this.setState({
                loading: true
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.paper.remove();
        }
    }, {
        key: 'genElementsContainer',
        value: function genElementsContainer() {
            if (this.state.loading) {
                return React.createElement(
                    'div',
                    { className: 'elements-container' },
                    this.props.children
                );
            } else {
                return React.createElement('div', { className: 'elements-container' });
            }
        }
    }, {
        key: 'getPaper',
        value: function getPaper() {
            return this.paper;
        }
    }, {
        key: 'render',
        value: function render() {
            var eleContainer = this.genElementsContainer();
            return React.createElement(
                'div',
                { className: 'react-raphael' },
                eleContainer,
                React.createElement('div', { ref: 'container', className: 'paper-container' })
            );
        }
    }]);

    return Paper;
}(React.Component);

var Set = function (_React$Component2) {
    _inherits(Set, _React$Component2);

    function Set(props) {
        _classCallCheck(this, Set);

        var _this2 = _possibleConstructorReturn(this, (Set.__proto__ || Object.getPrototypeOf(Set)).call(this, props));

        _this2.elements = [];
        _this2.state = {
            loading: false
        };
        return _this2;
    }

    _createClass(Set, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.onCreatedElement = this.onCreatedElement.bind(this);
            this.elements = [];
            var children = this.props.children || [];
            var isArray = children instanceof Array;
            if (!isArray) children = [children];
            for (var i = 0; i < children.length; i++) {
                var element = children[i];
                // element.props.onCreatedElement = this.onCreatedElement;
                var props = {};
                for (var key in element.props) {
                    props[key] = element.props[key];
                }
                props.onCreatedElement = this.onCreatedElement;
                props.key = i;
                this.elements.push(React.createElement(element.type, props, null));
            }
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            this.elements = [];
            var children = this.props.children || [];
            var isArray = children instanceof Array;
            if (!isArray) children = [children];
            for (var i = 0; i < children.length; i++) {
                var element = children[i];
                // element.props.onCreatedElement = this.onCreatedElement;
                var props = {};
                for (var key in element.props) {
                    props[key] = element.props[key];
                }
                props.onCreatedElement = this.onCreatedElement;
                props.key = i;
                this.elements.push(React.createElement(element.type, props, null));
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var set = Utils.createSet(this.props);
            this.set = set;
            this.setState({
                loading: true
            });
        }
    }, {
        key: 'componentWillUnmout',
        value: function componentWillUnmout() {
            Utils.removeSet(this.set);
        }
    }, {
        key: 'onCreatedElement',
        value: function onCreatedElement(element) {
            this.set.push(element);
        }
    }, {
        key: 'getSet',
        value: function getSet() {
            return this.set;
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.loading) {
                return React.createElement(
                    'div',
                    { className: 'raphael-set' },
                    this.elements
                );
            } else {
                return React.createElement('div', { className: 'raphael-set' });
            }
        }
    }]);

    return Set;
}(React.Component);

var Element = function (_React$Component3) {
    _inherits(Element, _React$Component3);

    function Element() {
        _classCallCheck(this, Element);

        return _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).apply(this, arguments));
    }

    _createClass(Element, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleLoad = this.handleLoad.bind(this);
            var element = Utils.createElement(this.props.type, this.props, this.handleLoad);
            this.element = element;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            Utils.removeElement(this.element);
        }
    }, {
        key: 'handleLoad',
        value: function handleLoad(element) {
            if (this.props.onCreatedElement) {
                this.props.onCreatedElement(element);
            }
            if (this.props.load) {
                this.props.load(element);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement('div', { className: "raphael-" + this.props.type });
        }
    }]);

    return Element;
}(React.Component);

var Circle = function Circle(props) {
    return React.createElement(Element, _extends({ type: 'circle' }, props));
};
var Ellipse = function Ellipse(props) {
    return React.createElement(Element, _extends({ type: 'ellipse' }, props));
};
var Image = function Image(props) {
    return React.createElement(Element, _extends({ type: 'image' }, props));
};
var Path = function Path(props) {
    return React.createElement(Element, _extends({ type: 'path' }, props));
};
var Rect = function Rect(props) {
    return React.createElement(Element, _extends({ type: 'rect' }, props));
};
var Text = function Text(props) {
    return React.createElement(Element, _extends({ type: 'text' }, props));
};

module.exports = {
    Paper: Paper,
    Set: Set,
    Element: Element,
    Circle: Circle,
    Ellipse: Ellipse,
    Image: Image,
    Path: Path,
    Rect: Rect,
    Text: Text
};