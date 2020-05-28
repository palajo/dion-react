import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// setting Benefit parameters
type ProductSpecsProps = {
    specsModel: string,
    specsTypeOfGas: string,
    specsNominalPressure: string,
    specsNominalWarmthPower: string,
    specsWorkingWaterPressure: string,
    specsWarmWaterOutput: string,
    specsSizes: string,
}

const ProductSpecs = ({ specsModel, specsTypeOfGas, specsNominalPressure, specsNominalWarmthPower,
                                 specsWorkingWaterPressure, specsWarmWaterOutput, specsSizes }: ProductSpecsProps) =>
    <Container className="padding-top-150 padding-bottom-150" id="specs">
        <Row className="justify-content-center">
            <h3 className="text-center">Технические характеристики</h3>
        </Row>
        <div className="space">
        </div>
        <Row className="justify-content-center">
            <Col lg={12} className="max-width-900">
                <table className="table justify-content-center">
                    <tbody>
                    <tr>
                        <td>Модель продукта:</td>
                        <td>{specsModel}</td>
                    </tr>
                    <tr>
                        <td>Вид газа:</td>
                        <td>{specsTypeOfGas}</td>
                    </tr>
                    <tr>
                        <td>Номинальное давление:</td>
                        <td>{specsNominalPressure}</td>
                    </tr>
                    <tr>
                        <td>Ном. тепловая мощность:</td>
                        <td>{specsNominalWarmthPower}</td>
                    </tr>
                    <tr>
                        <td>Рабочее давление воды:</td>
                        <td>{specsWorkingWaterPressure}</td>
                    </tr>
                    <tr>
                        <td>Выход горячей воды (ΔT=25°C):</td>
                        <td>{specsWarmWaterOutput}</td>
                    </tr>
                    <tr>
                        <td>Габариты:</td>
                        <td>{specsSizes}</td>
                    </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
    </Container>

export default ProductSpecs;