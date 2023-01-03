import React from 'react';
import ReactDOM from 'react-dom';
import {caesarCipher} from 'rotation-cipher';
import './index.css';

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            strLen: '',
            strLower: '',
            strUpper: '',
            firstChar: '',
            lastChar: '',
            titleCase: '',
            initials: '',
            strTrim: '',
            camelCase: '',
            kebabCase: '',
            strASCII: '',
            strHex: '',
            rot13: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleChange(event) {
        const input = event.target.value;
        const chars = input.split(' ');
        let camelCaseStr = chars.map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase().concat(word.slice(1).toLowerCase());
        });

        this.setState({
            inputVal: input,
            strLength: input.length,
            strLower: input.toLowerCase(),
            strUpper: input.toUpperCase(),
            firstChar: input.charAt(0),
            lastChar: input.charAt(input.length - 1),
            titleCase: chars.map((word) => word.charAt(0).toUpperCase().concat(word.slice(1).toLowerCase())).join(' '),
            initials: chars.map((word) => word.charAt(0).toUpperCase()),
            strTrim: input.trim(),
            camelCase: camelCaseStr,
            kebabCase: input.split(' ').map((word) => word.toLowerCase()).join('-'),
            strASCII: input.split('').map((char) => char.charCodeAt(0)).join(' '),
            strHex: input.split('').map((char) => char.charCodeAt(0).toString(16)).join(' '),
            rot13: caesarCipher(input)  
        });
    }
    handleReset() {
        this.setState({
            inputVal: '',
            strLength: '',
            strLower: '',
            strUpper: '',
            firstChar: '',
            lastChar: '',
            titleCase: '',
            initials: '',
            strTrim: '',
            camelCase: '',
            kebabCase: '',
            strASCII: '',
            strHex: '',
            rot13: ''
        });
    }

    render() {
        return (
            <div>
                <MyNavComponent />
                <GetInputComponent input={this.state.inputVal} handleChange={this.handleChange} handleReset={this.handleReset} />
                <RenderInputComponent input={this.state.inputVal} strLen={this.state.strLength} strLower={this.state.strLower} strUpper={this.state.strUpper} charOne={this.state.firstChar} charLast={this.state.lastChar} initials={this.state.initials} titleCase={this.state.titleCase} trimStr={this.state.strTrim} camelStr={this.state.camelCase} kebabStr={this.state.kebabCase} strAscii={this.state.strASCII} strHex={this.state.strHex} ceasarCipher={this.state.rot13} />
                <MyFooterComponent />
            </div>
        );
    }
}

class GetInputComponent extends React.Component {
    render() {
        return (
            <div className='inputs'>
                <h2>String Variation Table</h2>
                <div>
                    <input aria-label='Enter a string into the input box' value={this.props.input} onChange={this.props.handleChange} id='input-field' placeholder='Enter string...' />
                    <button className='reset' onClick={this.props.handleReset}>Clear</button>
                </div>
            </div>
        );
    }
}

class RenderInputComponent extends React.Component {
    render() {
        return (
            <div className='outputs'>
                <table>
                    <thead>
                        <tr>
                            <th width='190px'>String Variation</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Original String</td>
                            <td>{this.props.input}</td>
                        </tr>
                        <tr>
                            <td>String Length</td>
                            <td>{this.props.strLen}</td>
                        </tr>
                        <tr>
                            <td>Lowercase</td>
                            <td>{this.props.strLower}</td>
                        </tr>
                        <tr>
                            <td>Uppercase</td>
                            <td>{this.props.strUpper}</td>
                        </tr>
                        <tr>
                            <td>First Character</td>
                            <td>{this.props.charOne}</td>
                        </tr>
                        <tr>
                            <td>Last Character</td>
                            <td>{this.props.charLast}</td>
                        </tr>
                        <tr>
                            <td>Trim String</td>
                            <td>{this.props.trimStr}</td>
                        </tr>
                        <tr>
                            <td>Acronym Case</td>
                            <td>{this.props.initials}</td>
                        </tr>
                        <tr>
                            <td>Title Case</td>
                            <td>{this.props.titleCase}</td>
                        </tr>
                        <tr>
                            <td>camelCase</td>
                            <td>{this.props.camelStr}</td>
                        </tr>
                        <tr>
                            <td>kebab-case</td>
                            <td>{this.props.kebabStr}</td>
                        </tr>
                        <tr>
                            <td>Caesar Cipher</td>
                            <td>{this.props.ceasarCipher}</td>
                        </tr>
                        <tr>
                            <td>Decimal ASCII</td>
                            <td>{this.props.strAscii}</td>
                        </tr>
                        <tr>
                            <td>Hex format</td>
                            <td>{this.props.strHex}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class MyNavComponent extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <h1><a href='https://reactstrtable.netlify.app'>Home</a></h1>
                <nav>
                    <ul>
                        <li><a href='https://github.com/tannerdolby/react-string-table' target='_blank' rel='noopener noreferrer' aria-label='Link to repository on GitHub'><i className='fa fa-github' aria-hidden='false' title='Github icon button'/></a></li>
                        <li><a href='https://twitter.com/tannerdolby' target='_blank' rel='noopener noreferrer' aria-label='Link to my Twitter'><i className='fa fa-twitter' aria-hidden='false' title='Twitter icon button'/></a></li>
                        <li><a href='https://codepen.io/tannerdolby' target='_blank' rel='noopener noreferrer' aria-label='Link to my CodePen'><i className='fa fa-codepen' aria-hidden='false' title='CodePen icon button'/></a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

class MyFooterComponent extends React.Component {
    render() {
        return (
            <div className='footer'>
                <h2>Built with React and hosted on Netlify. Created by <a href='https://github.com/tannerdolby' rel='noopener noreferrer' target='_blank'>Tanner Dolby</a>.</h2>
            </div>
        );
    }
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
