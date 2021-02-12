import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import './ApiLoader.css';

const fetchAddress = {
    local: '/res/data.json',
    online: 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&order=dec&format=json'
};
class ApiLoader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            error: null,
            receivedLength: 0
        };
    }

    componentDidMount() {
        fetch(fetchAddress.online)
        .then(res => this.onFetch(res))
        .catch(err => this.errorHandler(err));
    }

    onFetch = async res => {
        if(!res.ok) {
            this.errorHandler(new Error("Invalid response."));
            return;
        }

        const reader = res.body.getReader();

        let receivedLength = 0;
        let chunks = [];

        while(true) {
            const { done, value } = await reader.read();

            if(done) {
                break;
            }

            chunks.push(value);
            receivedLength += value.length;

            this.setState({ receivedLength });
        }

        this.decodeChunks(chunks, receivedLength);
    }

    decodeChunks = (chunks, length) => {
        const chunksAll = new Uint8Array(length);
        let position = 0;
        for(let chunk of chunks) {
            chunksAll.set(chunk, position);
            position += chunk.length;
        }

        const result = new TextDecoder("utf-8").decode(chunksAll);
        const commits = JSON.parse(result);

        this.setState({ loaded: true });

        if(this.props.onLoad) {
            this.props.onLoad(commits);
        } else {
            this.errorHandler("'onLoad' prop undefined.");
        }
    }

    errorHandler = err => {
        this.setState({ error: err }, () => {
            console.error(err);
        });
    }

    render() {
        const { loaded } = this.state;

        if(!loaded) {
            return (
                <div className="ApiLoader">
                    <Typography style={{ paddingBottom: 20 }}>Pobieranie listy egzoplanet...</Typography>
                    <CircularProgress />
                    <Typography>{Math.round(this.state.receivedLength / 1000 / 1000 * 100) / 100}MB</Typography>
                </div>
            );
        }

        return <></>;
    }
}

export default ApiLoader;