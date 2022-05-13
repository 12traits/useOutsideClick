"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useOutsideClick = function (ref, onClickOutside, include) {
    if (include === void 0) { include = []; }
    (0, react_1.useEffect)(function () {
        var handleClickOutside = function (event) {
            if (ref.current &&
                !ref.current.contains(event.target) &&
                !include.some(function (includeRef) { var _a; return (_a = includeRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target); })) {
                onClickOutside();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, onClickOutside, include]);
};
exports.default = useOutsideClick;
