import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

function Contact() {
    const { register, handleSubmit } = useForm();

    const onValid = (data) => {
        console.log(data);
    };

    return (
        <>
            <ProcessContainer className="default-container">
                <ProcessHead>
                    <div>진행 프로세스</div>
                    <div>Project Process</div>
                </ProcessHead>
                <ProcessWrapper>
                    <div className="process__item">
                        <div className="process__index process__font">01.</div>
                        <div className="process__title process__font">프로젝트 의뢰</div>
                        <div className="process__description">
                            자세한 상담을 위해 문의 내용을 작성해주세요.
                        </div>
                    </div>
                    <div className="process__item">
                        <div className="process__index process__font">02.</div>
                        <div className="process__title process__font">상담</div>
                        <div className="process__description">
                            작성해주신 내용을 검토하여 전문 프로젝트매니저와의 상세한
                            무료상담이 진행됩니다.
                        </div>
                    </div>
                    <div className="process__item">
                        <div className="process__index process__font">03.</div>
                        <div className="process__title process__font">
                            기획&디자인&설계
                        </div>
                        <div className="process__description">
                            목적에 알맞는 컨텐츠 제작을 위한 기획 단계입니다. 2D, 3D
                            디자인부터 기술 설계도 문제없습니다.
                        </div>
                    </div>
                    <div className="process__item">
                        <div className="process__index process__font">04.</div>
                        <div className="process__title process__font">제작</div>
                        <div className="process__description">
                            기획, 디자인 설계 내용을 토대로 최적의 소재와 제작 방식을 통해
                            유형의 컨텐츠를 구현합니다.
                        </div>
                    </div>
                    <div className="process__item">
                        <div className="process__index process__font">05.</div>
                        <div className="process__title process__font">운송&설치</div>
                        <div className="process__description">
                            제작된 컨텐츠의 특징, 현장 상황에 알맞게 안전한 운반과 설치가
                            진행됩니다.
                        </div>
                    </div>
                </ProcessWrapper>

                <ProcessForm onSubmit={handleSubmit(onValid)}>
                    <FormHead>
                        <div>프로젝트 의뢰</div>
                    </FormHead>
                    <Column>
                        <div className="column__head">어떤 단계인가요? *</div>
                        <div className="column__info">
                            <label htmlFor="planing">
                                <input
                                    {...register("step")}
                                    type="radio"
                                    id="planing"
                                    name="step"
                                    value="기획,예편"
                                />
                                <div>기획 및 예산 편성 단계</div>
                            </label>
                            <label htmlFor="design">
                                <input
                                    {...register("step")}
                                    type="radio"
                                    id="design"
                                    name="step"
                                    value="디자인,설계"
                                />
                                <div>디자인 및 설계 단계</div>
                            </label>
                            <label htmlFor="making">
                                <input
                                    {...register("step")}
                                    type="radio"
                                    id="making"
                                    name="step"
                                    value="제작"
                                />
                                <div>제작단계</div>
                            </label>
                        </div>
                    </Column>
                    <Column>
                        <div className="column__head">
                            디자인이나 설계 도면이 준비되셨나요? *
                        </div>
                        <div className="column__info">
                            <label htmlFor="2d">
                                <input
                                    {...register("hasDesign")}
                                    type="radio"
                                    id="2d"
                                    name="hasDesign"
                                    value="2D"
                                />
                                <div>2D 디자인</div>
                            </label>
                            <label htmlFor="3d">
                                <input
                                    {...register("hasDesign")}
                                    type="radio"
                                    id="3d"
                                    name="hasDesign"
                                    value="3D"
                                />
                                <div>3D 디자인</div>
                            </label>
                            <label htmlFor="diagram">
                                <input
                                    {...register("hasDesign")}
                                    type="radio"
                                    id="diagram"
                                    name="hasDesign"
                                    value="도면"
                                />
                                <div>도면</div>
                            </label>
                            <label htmlFor="noDesign">
                                <input
                                    {...register("hasDesign")}
                                    type="radio"
                                    id="noDesign"
                                    name="hasDesign"
                                    value="없음"
                                />
                                <div>아니요</div>
                            </label>
                        </div>
                    </Column>
                    <Column>
                        <div className="column__head">
                            예산과 일정이 정해져 계신가요? *
                        </div>
                        <div className="column__info">
                            <select {...register("cost")}>
                                <option value="">예산을 선택해주세요. *</option>
                                <option value="500만원이하">500만원 이하</option>
                                <option value="2000만원이하">2000만원 이하</option>
                                <option value="5000만원이하">5000만원 이하</option>
                                <option value="1억원이하">1억원 이하</option>
                                <option value="1억원이상">1억원 이상</option>
                                <option value="미정">미정</option>
                            </select>
                            <select {...register("schedule")}>
                                <option value="">일정을 선택해주세요. *</option>
                                <option value="1개월내">시급해요! (1개월 내 완료)</option>
                                <option value="3개월내">3개월 내 완료</option>
                                <option value="3개월이상">3개월 이상</option>
                            </select>
                        </div>
                    </Column>
                    <Column>
                        <div className="column__head">내용을 말씀해 주시겠어요? *</div>
                        <div className="column__info">
                            <textarea
                                {...register("description")}
                                placeholder="컨텐츠의 종류 (ex. 캐릭터, 글자 등)와 제작 목적, 설치 현장 등에 대해 상세히 기입해주시면 상담 시 보다 구체적인 안내가 가능합니다. *"
                            />
                            <input type="file" {...register("image")} />
                            <input
                                {...register("like")}
                                placeholder="사이트에 있는 사례 중 관심있는 사례를 적어주세요."
                            />
                        </div>
                    </Column>
                    <Column>
                        <div className="column__head">
                            위브먼트를 알게 된 경로를 선택해주세요. *
                        </div>
                        <div className="column__info">
                            <label htmlFor="search">
                                <input
                                    {...register("knowPath")}
                                    type="radio"
                                    id="search"
                                    name="knowPath"
                                    value="검색"
                                />
                                <div>검색 ➡ 네이버, 구글, 다음</div>
                            </label>
                            <label htmlFor="sns">
                                <input
                                    {...register("knowPath")}
                                    type="radio"
                                    id="sns"
                                    name="knowPath"
                                    value="SNS"
                                />
                                <div>SNS ➡ 인스타그램, 페이스북</div>
                            </label>
                            <label htmlFor="myBlog">
                                <input
                                    {...register("knowPath")}
                                    type="radio"
                                    id="myBlog"
                                    name="knowPath"
                                    value="위브먼트블로그"
                                />
                                <div>'위브먼트' 네이버블로그</div>
                            </label>
                            <label htmlFor="otherBlog">
                                <input
                                    {...register("knowPath")}
                                    type="radio"
                                    id="otherBlog"
                                    name="knowPath"
                                    value="네이버블로그"
                                />
                                <div>네이버 블로그('위브먼트'공식 블로그 제외)</div>
                            </label>
                            <label htmlFor="friend">
                                <input
                                    {...register("knowPath")}
                                    type="radio"
                                    id="friend"
                                    name="knowPath"
                                    value="지인추천"
                                />
                                <div>지인추천</div>
                            </label>
                        </div>
                    </Column>
                    <button>1</button>
                </ProcessForm>
            </ProcessContainer>
        </>
    );
}

export default Contact;

const ProcessContainer = styled.div`
    padding-top: ${(props) => props.theme.navbarHeight};
`;

const ProcessHead = styled.div`
    padding: 60px 0 30px 0;
    color: ${(props) => props.theme.textColor};
    div:first-child {
        font-size: 28px;
        font-weight: 700;
    }
    div:last-child {
        font-size: 20px;
        font-weight: 700;
        margin-top: 2px;
    }
`;

const ProcessWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 10px;
    .process__item {
        width: 100%;
        height: 185px;
        padding: 5px 2px;
        display: flex;
        flex-direction: column;
        border-right: 1px solid ${(props) => props.theme.accentColor};

        .process__font {
            font-size: 24px;
            font-weight: 500;
            color: ${(props) => props.theme.accentColor};
        }
        .process__index {
            flex: 3.5;
        }
        .process__title {
            flex: 1.5;
        }
        .process__description {
            font-size: 14px;
            word-break: keep-all;
            flex: 1.5;
            line-height: 15px;
        }
    }
`;

const ProcessForm = styled.form`
    width: 100%;
    padding: 60px 120px;
    margin: 60px auto;
    height: 100%;
    border: 1px solid ${(props) => props.theme.borderColor};
    display: flex;
    flex-direction: column;
    .form__head {
        align-self: center;
        font-size: 48px;
        margin-bottom: 140px;
    }
`;

const FormHead = styled.div`
    font-size: 28px;
    font-weight: 700;
    padding-bottom: 40px;
`;

const Column = styled.div`
    margin-bottom: 40px;
    width: 80%;
    .column__head {
        font-size: 20px;
    }
    .column__info {
        padding: 20px 16px;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        textarea {
            width: 100%;
            border-radius: 3px;
            background-color: white;
            border: 1px solid ${(props) => props.theme.borderColor};
            resize: none;
            padding: 20px;
            height: 100%;
            min-height: 230px;
        }
        select {
            padding: 6px 8px;
            border-radius: 3px;
            background-color: white;
            font-size: 16px;
            border: 1px solid ${(props) => props.theme.borderColor};
            option {
                padding: 5px 0;
            }
        }
        label {
            div {
                cursor: pointer;
                font-size: 16px;
                padding: 6px 8px;
                border-radius: 3px;
                background-color: white;
                border: 1px solid ${(props) => props.theme.borderColor};
                /* &:hover {
                    background-color: ${(props) => props.theme.hoverColor};
                } */
            }
            input[type="radio"]:checked {
                + div {
                    background-color: ${(props) => props.theme.accentColor};
                    color: white;
                    /* border: 1px solid ${(props) => props.theme.accentColor}; */
                    /* color: ${(props) => props.theme.accentColor}; */
                }
            }
            input[type="radio"] {
                display: none;
            }
        }
    }
`;
