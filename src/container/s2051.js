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

const condition = [
    { value: "고객명", label: "고객명" },
    { value: "고객전화번호", label: "고객전화번호" },
    { value: "webID", label: "webID" },
];
const approval = [
    { value: "승인대기", label: "승인대기" },
    { value: "승인", label: "승인" },
    { value: "거부", label: "거부" },
];
const userTarget = [
    { value: "노약자", label: "노약자" },
    { value: "지체", label: "지체" },
    { value: "장기요양", label: "장기요양" },
    { value: "뇌병변", label: "뇌병변" },
    { value: "지체성장애", label: "지체성장애" },
    { value: "장기요양", label: "장기요양" },
];
const userTarget2 = [
    { value: "일시적장애", label: "일시적장애" },
    { value: "1급", label: "1급" },
];
const wheelchair = [
    { value: "미사용", label: "미사용" },
    { value: "자동", label: "자동" },
    { value: "수동", label: "수동" },
    { value: "보행보조기구", label: "보행보조기구" },
];
const sex = [
    { value: "남성", label: "남성" },
    { value: "여성", label: "여성" },
];
const communication = [
    { value: "가능", label: "가능" },
    { value: "불가능", label: "불가능" },
];
const assistant = [
    { value: "없음", label: "없음" },
    { value: "있음", label: "있음" },
];
const help = [
    { value: "완전도움", label: "완전도움" },
    { value: "도움", label: "도움" },
];
const disabilityGrade = [
    { value: "등급외", label: "등급외" },
    { value: "6급", label: "6급" },
    { value: "7급", label: "7급" },
];
const popTable = [
    { 순서: "1", 선택: "", 파일제목: "신분증" },
    { 순서: "2", 선택: "", 파일제목: "진단서" },
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
                <h2 className="tit-sub">홈페이지 가입고객 정보</h2>
            </div>
            <div className="d-flex flex-wrap">
                <div className="layer- layer-page">
                    <div className="cont-layer form-wrap cont-layer1">
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="namePop">고객명</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <Input type="text" name="namePop" id="namePop" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                            <Col xs="2" className="tit">
                                <Label htmlFor="idPop">WebID</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <Input type="text" name="idPop" id="idPop" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="phonePop">핸드폰번호</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <NumberFormat format="###-####-####" id="phonePop" name="phonePop" className="form-control" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                            <Col xs="2" className="tit">
                                <Label htmlFor="telPop">일반전화</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <NumberFormat format="###-####-####" id="telPop" name="telPop" className="form-control" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="userTargetPop">이용대상자 유형1</Label> <span className="ico-c">필수</span>
                            </Col>
                            <Col>
                                <Select options={userTarget2} defaultValue={userTarget2[0]} id="userTargetPop" name="userTargetPop" />
                            </Col>
                            <Col xs="2" className="tit">
                                <Label htmlFor="disabilityGradePop2">장애등급1</Label> <span className="ico-c">필수</span>
                            </Col>
                            <Col>
                                <Select
                                    options={disabilityGrade}
                                    defaultValue={disabilityGrade[0]}
                                    id="disabilityGradePop1"
                                    name="disabilityGradePop1"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="userTargetPop2">이용대상자 유형2</Label>
                            </Col>
                            <Col xs="4">
                                <Select options={userTarget} defaultValue={userTarget[0]} id="userTargetPop2" name="userTargetPop2" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="wheelchairPop">휠체어</Label> <span className="ico-c">필수</span>
                            </Col>
                            <Col xs="4">
                                <Select options={wheelchair} defaultValue={wheelchair[0]} id="wheelchairPop" name="wheelchairPop" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="birthPop">생년월일</Label>
                            </Col>
                            <Col xs="4">
                                <DatePickerButton />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="addressPop">주소</Label> <span className="ico-c">필수</span>
                            </Col>
                            <Col xs="5">
                                <Input type="text" name="addressPop" id="addressPop" />
                                <Button className="btn-pop">주소검색</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ offset: "2", size: "10" }}>
                                <Input type="text" name="addressPop2" id="addressPop2" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ offset: "2", size: "10" }}>
                                <div className="form-control-wrap">
                                    <Input type="text" name="addressPop3" id="addressPop3" placeholder="주소상세" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="emailPop">이메일</Label>
                            </Col>
                            <Col xs="4">
                                <div className="form-control-wrap">
                                    <Input type="email" name="emailPop" id="emailPop" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                            <Col className="s-paper">
                                <FormGroup check inline>
                                    <Input type="checkbox" id="emailPop2" name="emailPop2" />
                                    <Label htmlFor="emailPop2"> 메일링 서비스여부 </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Input type="checkbox" id="emailPop3" name="emailPop3" />
                                    <Label htmlFor="emailPop3">SMS수신여부</Label>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="sexPop">성별</Label>
                            </Col>
                            <Col xs="4">
                                <Select options={sex} defaultValue={sex[0]} id="sexPop" name="sexPop" />
                            </Col>
                            <Col xs="2" className="tit">
                                <Label htmlFor="communicationPop">의사소통여부</Label>
                            </Col>
                            <Col xs="4">
                                <Select
                                    options={communication}
                                    defaultValue={communication[0]}
                                    id="communicationPop"
                                    name="communicationPop"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="assistantPop">보조인여부</Label>
                            </Col>
                            <Col xs="4">
                                <Select options={assistant} defaultValue={assistant[0]} id="assistantPop" name="assistantPop" />
                            </Col>
                            <Col xs="2" className="tit">
                                <Label htmlFor="helpPop">도움여부</Label>
                            </Col>
                            <Col xs="4">
                                <Select options={help} defaultValue={help[0]} id="helpPop" name="helpPop" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="guardianPop">보호자명</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <Input type="text" name="guardianPop" id="guardianPop" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                            <Col xs="2" className="tit">
                                <Label htmlFor="guardianRelPop">보호자와의 관계</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <Input type="text" name="guardianRelPop" id="guardianRelPop" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="guardianPhonePop">보호자연락처1</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <NumberFormat
                                        format="###-####-####"
                                        id="guardianPhonePop"
                                        name="guardianPhonePop"
                                        className="form-control"
                                    />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                            <Col xs="2" className="tit">
                                <Label htmlFor="guardianPhonePop2">보호자연락처2</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <NumberFormat
                                        format="###-####-####"
                                        id="guardianPhonePop2"
                                        name="guardianPhonePop2"
                                        className="form-control"
                                    />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="ApprovalPop">승인요청일</Label>
                            </Col>
                            <Col xs="4">
                                <DatePickerButton />
                            </Col>
                        </Row>
                        <div className="tbl- ag-theme-balham mt-3">
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
                                style={{ height: "30px" }}
                            >
                                <AgGridColumn field="번호" minWidth={60} maxWidth={70}></AgGridColumn>
                                <AgGridColumn field="선택" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                                <AgGridColumn field="파일제목"></AgGridColumn>
                            </AgGridReact>
                        </div>

                        <Row className="btn-area">
                            <Col xs={{ size: 2, offset: 10 }}>
                                <Button className="btn-w">
                                    <i class="las la-print"></i> 프린트
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    <Button className="btn-close">
                        <i className="las la-times"></i>
                        <span className="blind">닫기</span>
                    </Button>
                </div>
                <div className="layer- layer-page">
                    <div className="cont-layer form-wrap cont-layer2">
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="namePop">고객명</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <Input type="text" name="namePop" id="namePop" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                            <Col xs="2" className="tit">
                                <Label htmlFor="idPop">WebID</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <Input type="text" name="idPop" id="idPop" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="phonePop">핸드폰번호</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <NumberFormat format="###-####-####" id="phonePop" name="phonePop" className="form-control" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                            <Col xs="2" className="tit">
                                <Label htmlFor="telPop">일반전화</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <NumberFormat format="###-####-####" id="telPop" name="telPop" className="form-control" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="userTargetPop">이용대상자 유형1</Label> <span className="ico-c">필수</span>
                            </Col>
                            <Col>
                                <Select options={userTarget} defaultValue={userTarget[0]} id="userTargetPop" name="userTargetPop" />
                            </Col>
                            <Col xs="2" className="tit">
                                <Label htmlFor="disabilityGradePop2">장애등급1</Label> <span className="ico-c">필수</span>
                            </Col>
                            <Col>
                                <Select
                                    options={disabilityGrade}
                                    defaultValue={disabilityGrade[0]}
                                    id="disabilityGradePop1"
                                    name="disabilityGradePop1"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="userTargetPop2">이용대상자 유형2</Label>
                            </Col>
                            <Col>
                                <Select options={userTarget2} defaultValue={userTarget2[0]} id="userTargetPop2" name="userTargetPop2" />
                            </Col>
                            <Col xs="2" className="tit">
                                <Label htmlFor="disabilityGradePop2">장애등급2</Label>
                            </Col>
                            <Col>
                                <Select
                                    options={disabilityGrade}
                                    defaultValue={disabilityGrade[0]}
                                    id="disabilityGradePop2"
                                    name="disabilityGradePop2"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="wheelchairPop">휠체어</Label> <span className="ico-c">필수</span>
                            </Col>
                            <Col xs="4">
                                <Select options={wheelchair} defaultValue={wheelchair[0]} id="wheelchairPop" name="wheelchairPop" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="birthPop">생년월일</Label>
                            </Col>
                            <Col xs="4">
                                <DatePickerButton />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="addressPop">주소</Label> <span className="ico-c">필수</span>
                            </Col>
                            <Col xs="5">
                                <Input type="text" name="addressPop" id="addressPop" />
                                <Button className="btn-pop">주소검색</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ offset: "2", size: "10" }}>
                                <Input type="text" name="addressPop2" id="addressPop2" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ offset: "2", size: "10" }}>
                                <div className="form-control-wrap">
                                    <Input type="text" name="addressPop3" id="addressPop3" placeholder="주소상세" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="emailPop">이메일</Label>
                            </Col>
                            <Col xs="4">
                                <div className="form-control-wrap">
                                    <Input type="email" name="emailPop" id="emailPop" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                            <Col className="s-paper">
                                <FormGroup check inline>
                                    <Input type="checkbox" id="emailPop2" name="emailPop2" />
                                    <Label htmlFor="emailPop2"> 메일링 서비스여부 </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Input type="checkbox" id="emailPop3" name="emailPop3" />
                                    <Label htmlFor="emailPop3">SMS수신여부</Label>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="sexPop">성별</Label>
                            </Col>
                            <Col xs="4">
                                <Select options={sex} defaultValue={sex[0]} id="sexPop" name="sexPop" />
                            </Col>
                            <Col xs="2" className="tit">
                                <Label htmlFor="communicationPop">의사소통여부</Label>
                            </Col>
                            <Col xs="4">
                                <Select
                                    options={communication}
                                    defaultValue={communication[0]}
                                    id="communicationPop"
                                    name="communicationPop"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="assistantPop">보조인여부</Label>
                            </Col>
                            <Col xs="4">
                                <Select options={assistant} defaultValue={assistant[0]} id="assistantPop" name="assistantPop" />
                            </Col>
                            <Col xs="2" className="tit">
                                <Label htmlFor="helpPop">도움여부</Label>
                            </Col>
                            <Col xs="4">
                                <Select options={help} defaultValue={help[0]} id="helpPop" name="helpPop" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="guardianPop">보호자명</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <Input type="text" name="guardianPop" id="guardianPop" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                            <Col xs="2" className="tit">
                                <Label htmlFor="guardianRelPop">보호자와의 관계</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <Input type="text" name="guardianRelPop" id="guardianRelPop" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="guardianPhonePop">보호자연락처1</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <NumberFormat
                                        format="###-####-####"
                                        id="guardianPhonePop"
                                        name="guardianPhonePop"
                                        className="form-control"
                                    />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                            <Col xs="2" className="tit">
                                <Label htmlFor="guardianPhonePop2">보호자연락처2</Label>
                            </Col>
                            <Col>
                                <div className="form-control-wrap">
                                    <NumberFormat
                                        format="###-####-####"
                                        id="guardianPhonePop2"
                                        name="guardianPhonePop2"
                                        className="form-control"
                                    />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                접수서류
                            </Col>
                            <Col xs="10" className="s-paper">
                                <FormGroup check inline>
                                    <Input type="checkbox" id="paperPop1" name="paperPop1" />
                                    <Label htmlFor="paperPop1"> 심사신청서 </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Input type="checkbox" id="paperPop2" name="paperPop2" />
                                    <Label htmlFor="paperPop2">정보이용동의서</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Input type="checkbox" id="paperPop3" name="paperPop3" />
                                    <Label htmlFor="paperPop3">복지카드사본</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Input type="checkbox" id="paperPop4" name="paperPop4" />
                                    <Label htmlFor="paperPop4">진단서</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Input type="checkbox" id="paperPop4" name="paperPop4" />
                                    <Label htmlFor="paperPop4">장애인증명서</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Input type="checkbox" id="paperPop4" name="paperPop4" />
                                    <Label htmlFor="paperPop4">장기요양인증서</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Input type="checkbox" id="paperPop4" name="paperPop4" />
                                    <Label htmlFor="paperPop4">기타</Label>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="registPop">등록일</Label>
                            </Col>
                            <Col>
                                <DatePickerButton />
                            </Col>
                        </Row>
                        <Row className="line-">
                            <Col xs="2" className="tit">
                                <Label htmlFor="filePop">파일제목</Label>
                            </Col>
                            <Col>
                                <Input type="text" name="filePop" id="filePop" />
                            </Col>
                            <Col className="justify-content-start">
                                <Button className="btn-pop">
                                    <i className="las la-plus"></i> 추가
                                </Button>
                                <Button className="btn-pop">
                                    <i className="las la-minus"></i> 삭제
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label htmlFor="fileAddPop">파일명</Label>
                            </Col>
                            <Col>
                                <Input type="file" name="fileAddPop" id="fileAddPop" />
                            </Col>
                        </Row>
                        <div className="tbl- ag-theme-balham mt-3">
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
                                style={{ height: "30px" }}
                            >
                                <AgGridColumn field="번호" minWidth={60} maxWidth={70}></AgGridColumn>
                                <AgGridColumn field="선택" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                                <AgGridColumn field="파일제목"></AgGridColumn>
                            </AgGridReact>
                        </div>
                    </div>
                    {/* <Button className="btn-close">
                        <i className="las la-times"></i>
                        <span className="blind">닫기</span>
                    </Button> */}
                </div>
            </div>

            <div className="layer-btn">
                <Row className="btn-area">
                    <Col xs={{ size: 2, offset: 3 }}>
                        <Button className="btn-w c-blue">승인</Button>
                    </Col>
                    <Col xs="2">
                        <Button className="btn-w c-red">거부</Button>
                    </Col>
                    <Col xs="2">
                        <Button className="btn-w">취소</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Current;
