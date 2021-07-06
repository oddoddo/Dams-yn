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

const report = [
    { value: "일보", label: "일보" },
    { value: "주보", label: "주보" },
    { value: "월보", label: "월보" },
];
const callAll = [
    { value: "즉시콜", label: "즉시콜" },
    { value: "예약콜", label: "예약콜" },
];
const condition = [
    { value: "차량ID", label: "차량ID" },
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
        <div className="wrap-data">
            <div className="tit-sub-wrap">
                <h2 className="tit-sub">일/주/월 보고</h2>
            </div>
            <div className="lst-data">
                <Form className="tbl-filter">
                    <FormGroup>
                        <Label htmlFor="report">보고서</Label>
                        <Select options={report} defaultValue={report[0]} id="report" name="report" />
                        <DatePickerButton /> <span className="wav- wav-right">~</span> <DatePickerButton />
                    </FormGroup>
                    <div className="btn-group2">
                        <ButtonToggle className="c-blue">
                            <i className="las la-search"></i> 검색
                        </ButtonToggle>
                    </div>
                </Form>
                <Row className="lst-wrap">
                    <Col xs="3">
                        <h3 className="tit-sub3">프린트 이력</h3>
                        <div className="tbl- ag-theme-balham">
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
                                <AgGridColumn field="날짜" minWidth={200}></AgGridColumn>
                                <AgGridColumn field="출력자" minWidth={100} cellRenderer="testRenderer"></AgGridColumn>
                            </AgGridReact>
                        </div>
                    </Col>
                    <Col>
                        <h3 className="tit-sub3">금일 운행실적</h3>
                        {/* 리스트 */}
                        <div className="tbl- ag-theme-balham" style={{ height: "200px" }}>
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
                                <AgGridColumn field="구분" minWidth={60} maxWidth={70} cellRenderer="testRenderer"></AgGridColumn>
                                <AgGridColumn field="상태"></AgGridColumn>
                                <AgGridColumn field="배차차량"></AgGridColumn>
                                <AgGridColumn field="고객명" minWidth={100}></AgGridColumn>
                                <AgGridColumn field="승차위치" minWidth={200}></AgGridColumn>
                                <AgGridColumn field="하차위치" minWidth={200}></AgGridColumn>
                                <AgGridColumn field="배차예정시간" minWidth={200}></AgGridColumn>
                                <AgGridColumn field="이용예정시간" minWidth={200}></AgGridColumn>
                                <AgGridColumn field="배차제한시간" minWidth={200}></AgGridColumn>
                                <AgGridColumn field="고객회신번호" minWidth={150}></AgGridColumn>
                                <AgGridColumn field="고객전화번호" minWidth={150}></AgGridColumn>
                                <AgGridColumn field="장애종류"></AgGridColumn>
                                <AgGridColumn field="동행인"></AgGridColumn>
                                <AgGridColumn field="접수시간" minWidth={200}></AgGridColumn>
                                <AgGridColumn field="배차시간"></AgGridColumn>
                                <AgGridColumn field="배차자"></AgGridColumn>
                            </AgGridReact>
                            <Menu id={MENU_ID}>
                                <Item onClick={handleItemClick} onContextMenu={tttt}>
                                    수정
                                </Item>
                                <Item onClick={handleItemClick}>배차</Item>
                                <Item onClick={handleItemClick}>접수</Item>
                                <Item onClick={handleItemClick}>대기</Item>
                                <Item onClick={handleItemClick}>지정배차</Item>
                                <Item onClick={handleItemClick}>취소</Item>
                                <Item onClick={handleItemClick}>완료</Item>
                                <Item onClick={handleItemClick}>콜이력</Item>
                            </Menu>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Current;
