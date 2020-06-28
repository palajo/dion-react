import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import axios from 'axios';

class CallbackForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            message: '',
            mailSent: false,
            error: null
        }
    }

    handleFormSubmit = e => {
      e.preventDefault();
      axios({
          method: 'post',
          url: 'callback.php',
          headers: { 'content-type': 'application/json' },
          data: this.state
      })
        .then(result => {
          this.setState({
            mailSent: result.data.sent
          })
        })
        .catch(error => this.setState({ error: error.message }));
    };

    render() {

        return(
            <form action="">
                <Row className="row justify-content-center row-form">
                    <Col lg={true} xs={12} md={6}>
                        <label>Имя:</label>
                        <input className="buy-form" type="text"  id="name" name="name"
                               placeholder="Иван.."

                               value={this.state.name}
                               onChange={e => this.setState({ name: e.target.value })}
                        />
                    </Col>
                    <Col lg={true} xs={12} md={6}>
                        <label>Контактный телефон:</label>
                        <input className="buy-form" type="text" id="phone" name="phone"
                               placeholder="+38 (000) 00 00 000.."

                               value={this.state.phone}
                               onChange={e => this.setState({ phone: e.target.value })}
                        />
                    </Col>
                </Row>
                <Row className="row margin-bottom-40">
                    <Col>
                        <label>Ваш вопрос:</label>
                        <textarea className="form-control my-form-input-message" id="message" name="message"
                                  placeholder="Опишите ваш вопрос вкратце.." rows="4"

                                  value={this.state.message}
                                  onChange={e => this.setState({ message: e.target.value })}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <button className="button" name="button" onClick={e => this.handleFormSubmit(e)}>Отправить</button>
                </Row>
                <div>
                  {this.state.mailSent &&
                    <div>Thank you for contcting us.</div>
                  }
                </div>
            </form>
        );
    }
}

export default CallbackForm;