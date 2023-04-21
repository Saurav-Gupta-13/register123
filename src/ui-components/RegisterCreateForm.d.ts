/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RegisterCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
};
export declare type RegisterCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RegisterCreateFormOverridesProps = {
    RegisterCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RegisterCreateFormProps = React.PropsWithChildren<{
    overrides?: RegisterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RegisterCreateFormInputValues) => RegisterCreateFormInputValues;
    onSuccess?: (fields: RegisterCreateFormInputValues) => void;
    onError?: (fields: RegisterCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RegisterCreateFormInputValues) => RegisterCreateFormInputValues;
    onValidate?: RegisterCreateFormValidationValues;
} & React.CSSProperties>;
export default function RegisterCreateForm(props: RegisterCreateFormProps): React.ReactElement;
