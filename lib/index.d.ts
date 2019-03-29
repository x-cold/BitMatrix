import BitMatrix from './BitMatrix';
import AnyMatrix from './AnyMatrix';
import AnyMatrixUseObject from './AnyMatrixUseObject';
declare const Int8Matrix: {
    new (width: number, height: number, defaultValue?: number): {
        _data: any;
        _dataInit(): void;
        fill(value: any): void;
        fillRow(row: number, value: any): void;
        fillColumn(column: number, v: any): void;
        get(x: number, y: number): any;
        set(x: number, y: number, v: any): void;
        getRow(row: number): any[];
        setRow(row: number, value: any[]): void;
        getColumn(column: number): any[];
        setColumn(column: number, value: any[]): void;
        cellForEach(fn: any): void;
        showView(): string;
        width: number;
        height: number;
        total: number;
    };
    className: string;
    getTypedMatrixClass(TypedArrayClass: any): any;
};
declare const Uint8Matrix: {
    new (width: number, height: number, defaultValue?: number): {
        _data: any;
        _dataInit(): void;
        fill(value: any): void;
        fillRow(row: number, value: any): void;
        fillColumn(column: number, v: any): void;
        get(x: number, y: number): any;
        set(x: number, y: number, v: any): void;
        getRow(row: number): any[];
        setRow(row: number, value: any[]): void;
        getColumn(column: number): any[];
        setColumn(column: number, value: any[]): void;
        cellForEach(fn: any): void;
        showView(): string;
        width: number;
        height: number;
        total: number;
    };
    className: string;
    getTypedMatrixClass(TypedArrayClass: any): any;
};
declare const Uint8ClampedMatrix: {
    new (width: number, height: number, defaultValue?: number): {
        _data: any;
        _dataInit(): void;
        fill(value: any): void;
        fillRow(row: number, value: any): void;
        fillColumn(column: number, v: any): void;
        get(x: number, y: number): any;
        set(x: number, y: number, v: any): void;
        getRow(row: number): any[];
        setRow(row: number, value: any[]): void;
        getColumn(column: number): any[];
        setColumn(column: number, value: any[]): void;
        cellForEach(fn: any): void;
        showView(): string;
        width: number;
        height: number;
        total: number;
    };
    className: string;
    getTypedMatrixClass(TypedArrayClass: any): any;
};
declare const Int16Matrix: {
    new (width: number, height: number, defaultValue?: number): {
        _data: any;
        _dataInit(): void;
        fill(value: any): void;
        fillRow(row: number, value: any): void;
        fillColumn(column: number, v: any): void;
        get(x: number, y: number): any;
        set(x: number, y: number, v: any): void;
        getRow(row: number): any[];
        setRow(row: number, value: any[]): void;
        getColumn(column: number): any[];
        setColumn(column: number, value: any[]): void;
        cellForEach(fn: any): void;
        showView(): string;
        width: number;
        height: number;
        total: number;
    };
    className: string;
    getTypedMatrixClass(TypedArrayClass: any): any;
};
declare const Uint16Matrix: {
    new (width: number, height: number, defaultValue?: number): {
        _data: any;
        _dataInit(): void;
        fill(value: any): void;
        fillRow(row: number, value: any): void;
        fillColumn(column: number, v: any): void;
        get(x: number, y: number): any;
        set(x: number, y: number, v: any): void;
        getRow(row: number): any[];
        setRow(row: number, value: any[]): void;
        getColumn(column: number): any[];
        setColumn(column: number, value: any[]): void;
        cellForEach(fn: any): void;
        showView(): string;
        width: number;
        height: number;
        total: number;
    };
    className: string;
    getTypedMatrixClass(TypedArrayClass: any): any;
};
declare const Int32Matrix: {
    new (width: number, height: number, defaultValue?: number): {
        _data: any;
        _dataInit(): void;
        fill(value: any): void;
        fillRow(row: number, value: any): void;
        fillColumn(column: number, v: any): void;
        get(x: number, y: number): any;
        set(x: number, y: number, v: any): void;
        getRow(row: number): any[];
        setRow(row: number, value: any[]): void;
        getColumn(column: number): any[];
        setColumn(column: number, value: any[]): void;
        cellForEach(fn: any): void;
        showView(): string;
        width: number;
        height: number;
        total: number;
    };
    className: string;
    getTypedMatrixClass(TypedArrayClass: any): any;
};
declare const Uint32Matrix: {
    new (width: number, height: number, defaultValue?: number): {
        _data: any;
        _dataInit(): void;
        fill(value: any): void;
        fillRow(row: number, value: any): void;
        fillColumn(column: number, v: any): void;
        get(x: number, y: number): any;
        set(x: number, y: number, v: any): void;
        getRow(row: number): any[];
        setRow(row: number, value: any[]): void;
        getColumn(column: number): any[];
        setColumn(column: number, value: any[]): void;
        cellForEach(fn: any): void;
        showView(): string;
        width: number;
        height: number;
        total: number;
    };
    className: string;
    getTypedMatrixClass(TypedArrayClass: any): any;
};
declare const Float32Matrix: {
    new (width: number, height: number, defaultValue?: number): {
        _data: any;
        _dataInit(): void;
        fill(value: any): void;
        fillRow(row: number, value: any): void;
        fillColumn(column: number, v: any): void;
        get(x: number, y: number): any;
        set(x: number, y: number, v: any): void;
        getRow(row: number): any[];
        setRow(row: number, value: any[]): void;
        getColumn(column: number): any[];
        setColumn(column: number, value: any[]): void;
        cellForEach(fn: any): void;
        showView(): string;
        width: number;
        height: number;
        total: number;
    };
    className: string;
    getTypedMatrixClass(TypedArrayClass: any): any;
};
declare const Float64Matrix: {
    new (width: number, height: number, defaultValue?: number): {
        _data: any;
        _dataInit(): void;
        fill(value: any): void;
        fillRow(row: number, value: any): void;
        fillColumn(column: number, v: any): void;
        get(x: number, y: number): any;
        set(x: number, y: number, v: any): void;
        getRow(row: number): any[];
        setRow(row: number, value: any[]): void;
        getColumn(column: number): any[];
        setColumn(column: number, value: any[]): void;
        cellForEach(fn: any): void;
        showView(): string;
        width: number;
        height: number;
        total: number;
    };
    className: string;
    getTypedMatrixClass(TypedArrayClass: any): any;
};
export { BitMatrix, AnyMatrix, AnyMatrixUseObject, Int8Matrix, Uint8Matrix, Uint8ClampedMatrix, Int16Matrix, Uint16Matrix, Int32Matrix, Uint32Matrix, Float32Matrix, Float64Matrix };
