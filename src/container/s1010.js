import React, { useEffect, useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { Row, Col, Button, ButtonToggle, Form, FormGroup, Label, Input } from "reactstrap";

import { Item, Menu, Separator, Submenu, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { getData } from "../api/data";
import TestRenderer from "../component/TestRenderer";

const defaultColDef = {
    width: 100,
    resizable: true,
};

const renew = [
    { value: "수동", label: "수동" },
    { value: "자동 3초", label: "자동 3초" },
    { value: "자동 5초", label: "자동 5초" },
    { value: "자동 10초", label: "자동 10초" },
    { value: "자동 30초", label: "자동 30초" },
    { value: "자동 1분", label: "자동 1분" },
];
const array = [
    { value: "시간순", label: "시간순" },
    { value: "상태순", label: "상태순" },
];
const state = [
    { value: "대기", label: "대기" },
    { value: "접수", label: "접수" },
    { value: "배차", label: "배차" },
];
const condition = [
    { value: "ID", label: "ID" },
    { value: "고객명", label: "고객명" },
    { value: "고객전화", label: "고객전화" },
    { value: "회신번호", label: "회신번호" },
    { value: "승차위치", label: "승차위치" },
    { value: "하차위치", label: "하차위치" },
    { value: "차량번호", label: "차량번호" },
];

const MENU_ID = "dams-context";

const Current = (props) => {
    const [activeTab, setActiveTab] = useState("1");
    const { show } = useContextMenu({
        id: MENU_ID,
    });
    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState([]);

    function testContext(e) {}

    function handleItemClick({ event, props, triggerEvent, data }) {
        console.log(props);
    }

    const onGridReady = (params) => {
        getData().then(function (r) {
            setRowData(r);
        });
    };

    const tttt = function (e) {
        e.preventDefault();
    };
    return (
        <div id="call" className="wrap-data">
            <div className="tit-sub-wrap">
                <h2 className="tit-sub">콜현황</h2>
            </div>

            <div className="lst-data">
                <Form className="tbl-filter">
                    <FormGroup>
                        <Label htmlFor="renew">갱신</Label>
                        <Select options={renew} defaultValue={renew[0]} id="renew" name="renew" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="array">정렬</Label>
                        <Select options={array} defaultValue={array[0]} id="array" name="array" />
                    </FormGroup>
                    <FormGroup className="inp-et2">
                        <Label htmlFor="state" className="blind">
                            상태
                        </Label>
                        <Select
                            isMulti
                            options={state}
                            id="state"
                            name="state"
                            placeholder="상태조건"
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="array" className="blind">
                            정렬
                        </Label>
                        <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                    </FormGroup>
                    <Input type="text" name="search" id="search" placeholder="검색" className="inp-search" />

                    <div className="btn-group2">
                        <ButtonToggle className="c-blue">
                            <i className="las la-search"></i> 검색
                        </ButtonToggle>
                    </div>
                </Form>
                <div className="tbl- ag-theme-balham" id={"test-call"}>
                    <AgGridReact
                        frameworkComponents={{
                            testRenderer: TestRenderer,
                        }}
                        rowData={rowData}
                        defaultColDef={defaultColDef}
                        allowContextMenuWithControlKey={true}
                        enableRangeSelection={true}
                        onCellContextMenu={testContext}
                        onGridReady={onGridReady}
                    >
                        <AgGridColumn field="표식" minWidth={60} maxWidth={70} />
                        <AgGridColumn field="구분" minWidth={60} maxWidth={70} />
                        <AgGridColumn field="상태" hide={true} />
                        <AgGridColumn field="배차차량" />
                        <AgGridColumn field="배차기사명" />
                        <AgGridColumn field="고객명" cellRenderer="testRenderer" />
                        <AgGridColumn field="승차위치" minWidth={150} />
                        <AgGridColumn field="하차위치" minWidth={150} />
                        <AgGridColumn field="배차예정시간" minWidth={180} />
                        <AgGridColumn field="이용예정시간" />
                        <AgGridColumn field="고객회신번호" minWidth={150} />
                        <AgGridColumn field="고객전화번호" minWidth={150} />
                        <AgGridColumn field="접수시간" />
                        <AgGridColumn field="접수자" />
                        <AgGridColumn field="접수자ID" />
                        <AgGridColumn field="배차시간" />
                        <AgGridColumn field="배차자" />
                        <AgGridColumn field="승차시간" />
                        <AgGridColumn field="하차시간" />
                        <AgGridColumn field="요금" />
                        <AgGridColumn field="기사전화번호" minWidth={150} />
                        <AgGridColumn field="차량번호" />
                    </AgGridReact>
                    <Menu id={MENU_ID}>
                        <Item onClick={handleItemClick} onContextMenu={tttt}>
                            Item 1
                        </Item>
                        <Item onClick={handleItemClick}>Item 2</Item>
                        <Separator />
                        <Item disabled>Disabled</Item>
                        <Separator />
                        <Submenu label="Submenu">
                            <Item onClick={handleItemClick}>Sub Item 1</Item>
                            <Item onClick={handleItemClick}>Sub Item 2</Item>
                        </Submenu>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Current;
