import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import { ILayoutConsumer, LayoutConsumer, LayoutContext, LayoutProvider } from 'components/Layout';

export const Home = () => {
    const layoutContext: ILayoutConsumer = useContext(LayoutContext)
    const history = useHistory()
    console.log('layoutContext', layoutContext);

    return (
        <div>
            Home Page
            <Button variant="text" onClick={() => {
                return history.push('/');
            }}> Go Home </Button>
            <Button variant="contained"
                onClick={() => {
                    return history.push('/login');
                }}
            >Login</Button>
            <Button variant="contained"
                onClick={() => layoutContext.onChangeExpand()}
            >Expand</Button>
            {/* <LayoutConsumer>
                {(context: any) => <Button variant="contained"
                    onClick={() => context.onChangeExpand()}
                >Expand</Button>}
            </LayoutConsumer> */}
            {JSON.stringify(layoutContext)}
        </div>

    )
}
