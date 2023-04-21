/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Register } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RegisterUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
};
export declare type RegisterUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RegisterUpdateFormOverridesProps = {
    RegisterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RegisterUpdateFormProps = React.PropsWithChildren<{
    overrides?: RegisterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    register?: Register;
    onSubmit?: (fields: RegisterUpdateFormInputValues) => RegisterUpdateFormInputValues;
    onSuccess?: (fields: RegisterUpdateFormInputValues) => void;
    onError?: (fields: RegisterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RegisterUpdateFormInputValues) => RegisterUpdateFormInputValues;
    onValidate?: RegisterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RegisterUpdateForm(props: RegisterUpdateFormProps): React.ReactElement;
