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
        <div className="wrap-data h-auto">
            <div className="tit-sub-wrap">
                <h2 className="tit-sub">일/주/월 보고 - 추진실적</h2>
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
                <Row className="wrap-col-2">
                    <Col xs="4">
                        <div className="form-cont-type2">
                            <h3 className="tit-sub3-t2">
                                <i className="las la-print"></i> 프린트 이력
                            </h3>
                        </div>
                        <div className="tbl- ag-theme-balham" style={{ height: "97.9%" }}>
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
                                <AgGridColumn field="번호" minWidth={60} maxWidth={70} cellRenderer="testRenderer"></AgGridColumn>
                                <AgGridColumn field="날짜" minWidth={100}></AgGridColumn>
                                <AgGridColumn field="출력자" minWidth={100}></AgGridColumn>
                            </AgGridReact>
                        </div>
                    </Col>
                    <Col>
                        <div className="form-cont-type2">
                            <h3 className="tit-sub3-t2">
                                <i className="las la-list"></i> 운영현황
                            </h3>
                        </div>
                        <h4 className="tit-sub4-t2">구별 운영현황</h4>
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
                                <AgGridColumn field="구분" />
                                <AgGridColumn field="합계" />
                                <AgGridColumn field="처인구" />
                                <AgGridColumn field="기흥구" />
                                <AgGridColumn field="수지구" />
                                <AgGridColumn field="서울" />
                                <AgGridColumn field="경기" />
                                <AgGridColumn field="인천" />
                                <AgGridColumn field="기타" />
                            </AgGridReact>
                        </div>
                        <div className="wrap-graph">
                            <div className="percent-indicator">
                                <div className="per-100"></div>
                                <div className="per-90"></div>
                                <div className="per-80"></div>
                                <div className="per-70"></div>
                                <div className="per-60"></div>
                                <div className="per-50"></div>
                                <div className="per-40"></div>
                                <div className="per-30"></div>
                                <div className="per-20"></div>
                                <div className="per-10"></div>
                                <div className="per-0"></div>
                            </div>
                            <ul className="graph">
                                <li>
                                    처인구 <span style={{ height: "100%" }}></span>
                                </li>
                                <li>
                                    기흥구 <span style={{ height: "80%" }}></span>
                                </li>
                                <li>
                                    수지구 <span style={{ height: "60%" }}></span>
                                </li>
                                <li>
                                    서울 <span style={{ height: "5%" }}></span>
                                </li>
                                <li>
                                    경기 <span style={{ height: "55%" }}></span>
                                </li>
                                <li>
                                    인천 <span style={{ height: "0%" }}></span>
                                </li>
                                <li>
                                    기타 <span style={{ height: "10%" }}></span>
                                </li>
                            </ul>
                        </div>
                        <h4 className="tit-sub4-t2">동별 운영현황</h4>
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
                                <AgGridColumn field="구분" />
                                <AgGridColumn field="합계" />
                                <AgGridColumn field="기흥구">
                                    <AgGridColumn field="구갈동" />
                                    <AgGridColumn field="구성동" />
                                    <AgGridColumn field="기흥동" />
                                    <AgGridColumn field="동백동" />
                                    <AgGridColumn field="마북동" />
                                    <AgGridColumn field="보정동" />
                                    <AgGridColumn field="상갈동" />
                                    <AgGridColumn field="상하동" />
                                    <AgGridColumn field="서농동" />
                                    <AgGridColumn field="신갈동" />
                                    <AgGridColumn field="영덕동" />
                                </AgGridColumn>
                            </AgGridReact>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Current;
