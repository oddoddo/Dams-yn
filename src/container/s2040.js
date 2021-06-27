import React, { Component } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { Row, Col, Button, ButtonToggle, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import Header from "../component/Header";
import Receive from "../component/Receive";
import Map from "../component/Map";

const webCall = [
    {
        번호: "1",
        고객명: "임현철",
        고객접수번호: "98574",
        유효기간: "2021-07-15",
        장애종류: "일시적장애",
        장애등급: "2급",
        휠체어: "휠체어수동",
        소통여부: "가능",
        생년월일: "1874-05-05",
        성별: "남",
        고객전화번호: "070-2222-3333",
        휴대폰번호: "010-2222-3333",
        추가전화번호: "",
    },
    {
        번호: "1",
        고객명: "임현철",
        고객접수번호: "98574",
        유효기간: "2021-07-15",
        장애종류: "일시적장애",
        장애등급: "2급",
        휠체어: "휠체어수동",
        소통여부: "가능",
        생년월일: "1874-05-05",
        성별: "남",
        고객전화번호: "070-2222-3333",
        휴대폰번호: "010-2222-3333",
        추가전화번호: "",
    },
    {
        번호: "1",
        고객명: "임현철",
        고객접수번호: "98574",
        유효기간: "2021-07-15",
        장애종류: "일시적장애",
        장애등급: "2급",
        휠체어: "휠체어수동",
        소통여부: "가능",
        생년월일: "1874-05-05",
        성별: "남",
        고객전화번호: "070-2222-3333",
        휴대폰번호: "010-2222-3333",
        추가전화번호: "",
    },
    {
        번호: "1",
        고객명: "임현철",
        고객접수번호: "98574",
        유효기간: "2021-07-15",
        장애종류: "일시적장애",
        장애등급: "2급",
        휠체어: "휠체어수동",
        소통여부: "가능",
        생년월일: "1874-05-05",
        성별: "남",
        고객전화번호: "070-2222-3333",
        휴대폰번호: "010-2222-3333",
        추가전화번호: "",
    },
    {
        번호: "1",
        고객명: "임현철",
        고객접수번호: "98574",
        유효기간: "2021-07-15",
        장애종류: "일시적장애",
        장애등급: "2급",
        휠체어: "휠체어수동",
        소통여부: "가능",
        생년월일: "1874-05-05",
        성별: "남",
        고객전화번호: "070-2222-3333",
        휴대폰번호: "010-2222-3333",
        추가전화번호: "",
    },
];

const defaultColDef = {
    width: 100,
    resizable: true,
};

const availability = [
    { value: "전체", label: "전체" },
    { value: "사용", label: "사용" },
    { value: "미사용", label: "미사용" },
];
const wheelchair = [
    { value: "자동", label: "자동" },
    { value: "수동", label: "수동" },
    { value: "미사용", label: "미사용" },
    { value: "보행보조기구", label: "보행보조기구" },
];
const disabilityType = [
    { value: "장기요양", label: "장기요양" },
    { value: "지체", label: "지체" },
];
const disabilityRank = [
    { value: "6급", label: "6급" },
    { value: "7급", label: "7급" },
];
const communicate = [
    { value: "가능", label: "가능" },
    { value: "불가능", label: "불가능" },
];
const gender = [
    { value: "남자", label: "남자" },
    { value: "여자", label: "여자" },
];
const condition = [
    { value: "고객명", label: "고객명" },
    { value: "고객접수번호", label: "고객접수번호" },
    { value: "고객전화번호", label: "고객전화번호" },
    { value: "휴대폰번호", label: "휴대폰번호" },
];
const usePop = [
    { value: "사용", label: "사용" },
    { value: "비사용", label: "비사용" },
];
const positionPop = [
    { value: "관내", label: "관내" },
    { value: "비관내", label: "비관내" },
];

class Main extends Component {
    render() {
        return (
            <div className="wrap">
                <Header />
                <div id="main">
                    <Receive />
                    <div className="contents">
                        <Map />
                        <div className="wrap-data">
                            <div className="tit-sub-wrap">
                                <h2 className="tit-sub">고객관리</h2>
                            </div>
                            <div className="lst-data">
                                {/* 검색 */}
                                <Form className="tbl-filter">
                                    <Row>
                                        <Col xs="2">
                                            <FormGroup>
                                                <Label for="availability" className="blind">
                                                    사용여부
                                                </Label>
                                                <Select
                                                    options={availability}
                                                    id="availability"
                                                    name="availability"
                                                    placeholder="사용여부"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="2">
                                            <FormGroup>
                                                <Label for="wheelchair" className="blind">
                                                    휠체어
                                                </Label>
                                                <Select options={wheelchair} id="wheelchair" name="wheelchair" placeholder="휠체어" />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="2">
                                            <FormGroup>
                                                <Label for="disabilityType" className="blind">
                                                    장애종류
                                                </Label>
                                                <Select
                                                    options={disabilityType}
                                                    id="disabilityType"
                                                    name="disabilityType"
                                                    placeholder="장애종류"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="2">
                                            <FormGroup>
                                                <Label for="disabilityRank" className="blind">
                                                    장애등급
                                                </Label>
                                                <Select
                                                    options={disabilityRank}
                                                    id="disabilityRank"
                                                    name="disabilityRank"
                                                    placeholder="장애등급"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="2">
                                            <FormGroup>
                                                <Label for="communicate" className="blind">
                                                    소통여부
                                                </Label>
                                                <Select options={communicate} id="communicate" name="communicate" placeholder="소통여부" />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="2">
                                            <FormGroup>
                                                <Label for="gender" className="blind">
                                                    성별
                                                </Label>
                                                <Select options={gender} id="gender" name="gender" placeholder="성별" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                                <Form className="tbl-filter">
                                    <Row>
                                        <Col xs="2">
                                            <FormGroup>
                                                <Label for="condition">조회조건</Label>
                                                <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="2">
                                            <Input type="text" name="search" id="search" placeholder="검색" />
                                        </Col>
                                        <Col xs="3">
                                            <FormGroup>
                                                <Label for="useNumber">이용횟수</Label>
                                                <Input type="number" name="useNumber" id="useNumber" placeholder="0" />
                                                <span className="wav-">~</span>
                                                <Input type="number" name="useNumber2" id="useNumber2" placeholder="999,999" />
                                            </FormGroup>
                                        </Col>
                                        <Col className="btn-group2">
                                            <ButtonToggle className="c-blue">
                                                <i className="las la-plus"></i> 신규
                                            </ButtonToggle>
                                            <ButtonToggle className="">
                                                <i className="las la-search"></i> 검색
                                            </ButtonToggle>
                                            <ButtonToggle className="c-green">
                                                <i className="las la-file-excel"></i> 엑셀
                                            </ButtonToggle>
                                        </Col>
                                    </Row>
                                </Form>
                                {/* 리스트 */}
                                <div className="tbl- ag-theme-balham">
                                    <AgGridReact
                                        rowData={webCall}
                                        defaultColDef={defaultColDef}
                                        enableRangeSelection={true}
                                        allowContextMenuWithControlKey={true}
                                    >
                                        <AgGridColumn field="번호" minWidth={60} maxWidth={70}></AgGridColumn>
                                        <AgGridColumn field="고객명"></AgGridColumn>
                                        <AgGridColumn field="고객접수번호"></AgGridColumn>
                                        <AgGridColumn field="유효기간" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="장애종류"></AgGridColumn>
                                        <AgGridColumn field="장애등급"></AgGridColumn>
                                        <AgGridColumn field="휠체어"></AgGridColumn>
                                        <AgGridColumn field="소통여부"></AgGridColumn>
                                        <AgGridColumn field="생년월일" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="성별"></AgGridColumn>
                                        <AgGridColumn field="고객전화번호" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="휴대폰번호" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="추가전화번호" minWidth={150}></AgGridColumn>
                                    </AgGridReact>
                                </div>
                            </div>

                            {/* layer */}
                            <div className="layer-" style={{ top: "300px", left: "40px", width: "700px" }}>
                                <div className="head-layer">
                                    <h3>고객 등록</h3>
                                </div>
                                <div className="cont-layer form-wrap">
                                    <Row>
                                        <Col className="tit">
                                            <label for="namePop">고객명</label>
                                        </Col>
                                        <Col xs="4">
                                            <div className="form-control-wrap">
                                                <Input type="text" name="namePop" id="namePop" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                        <Col className="tit">
                                            <label for="usePop">사용여부</label>
                                        </Col>
                                        <Col xs="4">
                                            <Select options={usePop} defaultValue={usePop[0]} id="usePop" name="usePop" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="tit">
                                            <Label for="birthPop">생년월일/성별</Label>
                                        </Col>
                                        <Col xs="4">
                                            <DatePickerButton />
                                        </Col>
                                        <Col className="tit">
                                            <label for="positionPop">거주위치</label>
                                        </Col>
                                        <Col xs="4">
                                            <Select
                                                options={positionPop}
                                                defaultValue={positionPop[0]}
                                                id="positionPop"
                                                name="positionPop"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="tit">
                                            <label for="receiptPop">고객접수번호</label>
                                        </Col>
                                        <Col xs="4">
                                            <div className="form-control-wrap">
                                                <Input type="text" name="receiptPop" id="receiptPop" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <Button className="btn-pop">중복검사</Button>
                                        </Col>
                                        <Col className="tit">
                                            <label for="reptelPop">대표자전화</label>
                                        </Col>
                                        <Col xs="4">
                                            <div className="form-control-wrap">
                                                <NumberFormat
                                                    format="###-####-####"
                                                    id="reptelPop"
                                                    name="reptelPop"
                                                    className="form-control"
                                                />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <Button className="btn-pop">중복검사</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="tit">
                                            <label for="adressPop">주소</label>
                                        </Col>
                                        <Col xs="4">
                                            <div className="form-control-wrap">
                                                <Input type="text" name="adressPop" id="adressPop" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <Button className="btn-pop">주소검색</Button>
                                        </Col>
                                        <Col className="tit">
                                            <label for="phonePop">휴대폰번호</label>
                                        </Col>
                                        <Col xs="4">
                                            <div className="form-control-wrap">
                                                <NumberFormat
                                                    format="###-####-####"
                                                    id="phonePop"
                                                    name="phonePop"
                                                    className="form-control"
                                                />

                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col></Col>
                                        <Col xs="4">
                                            <div className="form-control-wrap">
                                                <Input type="text" name="adressPop2" id="adressPop2" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                        <Col></Col>
                                        <Col xs="4"></Col>
                                    </Row>
                                    <Row>
                                        <Col className="tit">
                                            <label for="addtelPop1">추가전화1</label>
                                        </Col>
                                        <Col xs="4">
                                            <div className="form-control-wrap">
                                                <NumberFormat
                                                    format="###-####-####"
                                                    id="addtelPop1"
                                                    name="addtelPop1"
                                                    className="form-control"
                                                />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                        <Col className="tit">
                                            <label for="notePop1">비고</label>
                                        </Col>
                                        <Col xs="4">
                                            <div className="form-control-wrap">
                                                <Input type="text" name="notePop1" id="notePop1" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="tit">
                                            <label for="addtelPop1">추가전화2</label>
                                        </Col>
                                        <Col xs="4">
                                            <div className="form-control-wrap">
                                                <NumberFormat
                                                    format="###-####-####"
                                                    id="addtelPop2"
                                                    name="addtelPop2"
                                                    className="form-control"
                                                />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                        <Col className="tit">
                                            <label for="notePop2">비고</label>
                                        </Col>
                                        <Col xs="4">
                                            <div className="form-control-wrap">
                                                <Input type="text" name="notePop2" id="notePop2" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="tit">
                                            <label for="addtelPop3">추가전화3</label>
                                        </Col>
                                        <Col xs="4">
                                            <div className="form-control-wrap">
                                                <NumberFormat
                                                    format="###-####-####"
                                                    id="addtelPop3"
                                                    name="addtelPop3"
                                                    className="form-control"
                                                />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                        <Col className="tit">
                                            <label for="notePop3">비고</label>
                                        </Col>
                                        <Col xs="4">
                                            <div className="form-control-wrap">
                                                <Input type="text" name="notePop3" id="notePop3" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="btn-area">
                                        <Col></Col>
                                        <Col>
                                            <Button className="btn-w c-blue">저장</Button>
                                        </Col>
                                        <Col>
                                            <Button className="btn-w">취소</Button>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </div>
                                <Button className="btn-close">
                                    <i className="las la-times"></i>
                                    <span className="blind">닫기</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Main;