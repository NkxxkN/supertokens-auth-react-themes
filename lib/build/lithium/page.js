"use strict";

function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
        };
    }
    return _typeof(obj);
}

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = Page;

var _core = require("@emotion/core");

var React = _interopRequireWildcard(require("react"));

var _styleContext = require("supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext");

function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
    };
    return cache;
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || (_typeof(obj) !== "object" && typeof obj !== "function")) {
        return { default: obj };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj["default"] = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

/* Copyright (c) 2020, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/*
 * Imports.
 */

/** @jsx jsx */

/*
 * Component.
 */
function Page(_ref) {
    var form = _ref.form,
        header = _ref.header,
        logo = _ref.logo,
        backgroundUrl = _ref.backgroundUrl;
    return (0, _core.jsx)(_styleContext.StyleConsumer, null, function(styles) {
        return (0, _core.jsx)(
            "div",
            null,
            (0, _core.jsx)(
                "div",
                {
                    className: "page",
                    css: styles.page
                },
                (0, _core.jsx)(
                    "div",
                    {
                        className: "pageIllustration",
                        css: styles.pageIllustration
                    },
                    backgroundUrl !== undefined &&
                        (0, _core.jsx)("img", {
                            className: "pageBackgroundImg",
                            css: styles.pageBackgroundImg,
                            src: backgroundUrl
                        })
                ),
                (0, _core.jsx)(
                    "div",
                    {
                        className: "pageFormWrapper",
                        css: styles.pageFormWrapper
                    },
                    header !== undefined &&
                        (0, _core.jsx)(
                            "div",
                            {
                                className: "pageHeader",
                                css: styles.pageHeader
                            },
                            header,
                            logo !== undefined &&
                                (0, _core.jsx)(
                                    "a",
                                    {
                                        href: "/",
                                        className: "pageLogo",
                                        css: styles.pageLogo
                                    },
                                    (0, _core.jsx)("img", {
                                        className: "pageLogoImg",
                                        css: styles.pageLogoImg,
                                        src: logo
                                    })
                                )
                        ),
                    (0, _core.jsx)(
                        "div",
                        {
                            className: "pageForm",
                            css: styles.pageForm
                        },
                        form
                    )
                )
            )
        );
    });
}
