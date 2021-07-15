import React from 'react';

type Props = {
    object: any;
};

export default function DebugComponent(props: Props) {
    return <>{JSON.stringify(props.object)}</>;
}
