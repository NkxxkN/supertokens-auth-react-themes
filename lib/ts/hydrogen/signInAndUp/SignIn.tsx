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
import * as React from "react";
import { PureComponent } from "react";
import { SignInThemeProps } from "supertokens-auth-react/lib/build/recipe/emailpassword/types";

/** @jsx jsx */
import { jsx } from "@emotion/core";

import FormBase from "supertokens-auth-react/lib/build/recipe/emailpassword/components/library/FormBase";
import StyleContext from "supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext";

/*
 * Component.
 */

export default class SignInTheme extends PureComponent<SignInThemeProps> {
    static contextType = StyleContext;
    /*
     * Render.
     */

    render(): JSX.Element {
        const styles = this.context;
        const { forgotPasswordClick, onSuccess, formFields, callAPI } = this.props;

        return (
            <FormBase
                formFields={formFields}
                buttonLabel={"SIGN IN"}
                onSuccess={onSuccess}
                callAPI={callAPI}
                showLabels={true}
                footer={
                    <div
                        className="link secondaryText forgotPasswordLink"
                        css={[styles.link, styles.secondaryText, styles.forgotPasswordLink]}
                        onClick={forgotPasswordClick}>
                        Forgot password?
                    </div>
                }
            />
        );
    }
}
