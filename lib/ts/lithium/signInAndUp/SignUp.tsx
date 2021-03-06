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
import { SignUpThemeProps } from "supertokens-auth-react/lib/build/recipe/emailpassword/types";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import SignUpFooter from "supertokens-auth-react/lib/build/recipe/emailpassword/components/themes/default/signInAndUp/SignUpFooter";
import FormBase from "supertokens-auth-react/lib/build/recipe/emailpassword/components/library/FormBase";

/*
 * Component.
 */

export default class SignUpTheme extends PureComponent<SignUpThemeProps> {
    /*
     * Render.
     */
    render(): JSX.Element {
        const { privacyPolicyLink, formFields, termsOfServiceLink, onSuccess, callAPI } = this.props;

        return (
            <FormBase
                formFields={formFields}
                buttonLabel={"SIGN UP"}
                onSuccess={onSuccess}
                callAPI={callAPI}
                showLabels={false}
                validateOnBlur={true}
                footer={
                    <SignUpFooter
                        componentStyles={{}}
                        privacyPolicyLink={privacyPolicyLink}
                        termsOfServiceLink={termsOfServiceLink}
                    />
                }
            />
        );
    }
}
