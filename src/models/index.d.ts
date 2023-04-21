import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRegister = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Register, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRegister = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Register, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Register = LazyLoading extends LazyLoadingDisabled ? EagerRegister : LazyRegister

export declare const Register: (new (init: ModelInit<Register>) => Register) & {
  copyOf(source: Register, mutator: (draft: MutableModel<Register>) => MutableModel<Register> | void): Register;
}