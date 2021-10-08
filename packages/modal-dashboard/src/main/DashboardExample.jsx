import React, { useState } from 'react';

import Modal from '@splunk/react-ui/Modal';
import DashboardCore from '@splunk/dashboard-core';
import { DashboardContextProvider } from '@splunk/dashboard-context';
import EnterprisePreset from '@splunk/dashboard-presets/EnterprisePreset';
import SplunkThemeProvider from '@splunk/themes/SplunkThemeProvider';
// import definition from './definition.json';
// import Modal from './DataModal';

const definition = {
    visualizations: {
        viz_HAk44ZUo: {
            type: 'splunk.singlevalue',
            dataSources: {
                primary: 'test1',
            },
            title: 'NW Servers',
            options: {
                showSparklineAreaGraph: true,
                sparklineStrokeColor: '> trendColor',
                showSparklineTooltip: true,
                backgroundColor: '#53a051',
            },
        },
        viz_VqtvG1yo: {
            type: 'splunk.singlevalue',
            dataSources: {
                primary: 'test2',
            },
            title: 'NE Servers',
            options: {
                showSparklineAreaGraph: true,
                sparklineStrokeColor: '> trendColor',
                showSparklineTooltip: true,
                backgroundColor: '#dc4e41',
            },
        },
        viz_pn7Ah9vW: {
            type: 'splunk.singlevalue',
            dataSources: {
                primary: 'test2',
            },
            title: 'SW Servers',
            options: {
                showSparklineAreaGraph: true,
                sparklineStrokeColor: '> trendColor',
                showSparklineTooltip: true,
                backgroundColor: '#f1813f',
                majorValue: "> primary | seriesByName('count') | pointByIndex(10)",
            },
        },
        viz_EXiXRX4U: {
            type: 'splunk.singlevalue',
            dataSources: {
                primary: 'test1',
            },
            title: 'SE Servers',
            options: {
                showSparklineAreaGraph: true,
                sparklineStrokeColor: '> trendColor',
                showSparklineTooltip: true,
                backgroundColor: '#f8be44',
                majorValue: "> primary | seriesByName('count') | pointByIndex(12)",
            },
        },
        viz_SW: {
            type: 'splunk.ellipse',
            options: {
                fillColor: '#ffffff',
                strokeColor: '#ffffff',
            },
            eventHandlers: [
                {
                    type: 'ellipse.click',
                },
            ],
        },
        viz_SE: {
            type: 'splunk.ellipse',
            options: {
                fillColor: '#ffffff',
                strokeColor: '#ffffff',
            },
            eventHandlers: [
                {
                    type: 'ellipse.click',
                },
            ],
        },
        viz_NE: {
            type: 'splunk.ellipse',
            options: {
                fillColor: '#ffffff',
                strokeColor: '#ffffff',
            },
            eventHandlers: [
                {
                    type: 'ellipse.click',
                },
            ],
        },
        viz_NW: {
            type: 'splunk.ellipse',
            options: {
                fillColor: '#ffffff',
                strokeColor: '#ffffff',
            },
            eventHandlers: [
                {
                    type: 'ellipse.click',
                },
            ],
        },
        viz_QHRzTGFQ: {
            type: 'abslayout.line',
        },
        viz_TzwaPrgt: {
            type: 'abslayout.line',
        },
        viz_Jnx0o633: {
            type: 'abslayout.line',
        },
        viz_DLUIxOtM: {
            type: 'abslayout.line',
        },
        viz_vZD1cyae: {
            type: 'splunk.area',
            dataSources: {
                primary: 'test3',
            },
            options: {
                xAxisTitleVisibility: 'hide',
                yAxisTitleVisibility: 'hide',
                backgroundColor: 'transparent',
                seriesColors: ['#0877a6'],
                xAxisLabelVisibility: 'hide',
                yAxisLabelVisibility: 'hide',
                legendDisplay: 'off',
            },
            title: 'Player Logins',
        },
        viz_SoNvsCtV: {
            type: 'splunk.markdown',
            options: {
                markdown:
                    '## This app helps detect cheaters amongst the player base in various servers across the country',
            },
        },
        viz_11f98rjH: {
            type: 'splunk.column',
            dataSources: {
                primary: 'test4',
            },
            title: 'Social Mentions',
            showProgressBar: false,
            showLastUpdated: false,
            options: {
                xAxisTitleVisibility: 'hide',
                yAxisTitleVisibility: 'hide',
                backgroundColor: 'transparent',
                xAxisLabelVisibility: 'hide',
                yAxisLabelVisibility: 'hide',
                legendDisplay: 'off',
            },
        },
    },
    dataSources: {
        test1: {
            type: 'ds.test',
            name: 'test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'count',
                        },
                    ],
                    columns: [
                        [
                            '0',
                            '1',
                            '10',
                            '1',
                            '12',
                            '3',
                            '14',
                            '15',
                            '16',
                            '17',
                            '18',
                            '19',
                            '78',
                            '20',
                            '21',
                            '27',
                            '23',
                            '3',
                            '10',
                            '5',
                        ],
                    ],
                },
            },
        },
        test2: {
            type: 'ds.test',
            name: 'test2',
            options: {
                data: {
                    fields: [
                        {
                            name: 'count',
                        },
                    ],
                    columns: [
                        [
                            '866',
                            '1020',
                            '1096',
                            '1738',
                            '1063',
                            '866',
                            '1204',
                            '127',
                            '972',
                            '870',
                            '569',
                            '836',
                            '867',
                            '866',
                            '866',
                            '997',
                            '866',
                            '1263',
                            '867',
                            '868',
                        ],
                    ],
                },
            },
        },
        test3: {
            type: 'ds.test',
            name: 'test3',
            options: {
                data: {
                    fields: [
                        {
                            name: 'time',
                        },
                        {
                            name: 'count',
                        },
                    ],
                    columns: [
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                        [
                            866, 1020, 1096, 1738, 1063, 866, 1201, 1227, 972, 870, 569, 836, 867,
                            866, 866, 997, 866, 1263, 867, 868,
                        ],
                    ],
                },
            },
        },
        test4: {
            type: 'ds.test',
            name: 'test4',
            options: {
                data: {
                    fields: [
                        {
                            name: 'time',
                        },
                        {
                            name: 'count',
                        },
                    ],
                    columns: [
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                        [
                            66, 120, 196, 138, 63, 86, 120, 127, 72, 80, 59, 83, 87, 66, 86, 97, 66,
                            126, 67, 88,
                        ],
                    ],
                },
            },
        },
        ds_r6S7ZB06_test3: {
            type: 'ds.test',
            name: 'Copy of test2',
            options: {
                data: {
                    fields: [
                        {
                            name: 'time',
                        },
                        {
                            name: 'count',
                        },
                    ],
                    columns: [
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                        [
                            866, 1020, 1096, 1738, 1063, 866, 1201, 1227, 972, 870, 569, 836, 867,
                            866, 866, 997, 866, 1263, 867, 868,
                        ],
                    ],
                },
            },
        },
    },
    defaults: {},
    inputs: {},
    layout: {
        type: 'absolute',
        options: {
            display: 'auto-scale',
            width: 1440,
            height: 1024,
            backgroundImage: {
                sizeType: 'contain',
                x: 0,
                y: 0,
                src: 'https://github.com/splunk/customized-app-conf19/blob/master/public/dashboard-background.png?raw=true',
            },
        },
        structure: [
            {
                item: 'viz_HAk44ZUo',
                type: 'block',
                position: {
                    x: 40,
                    y: 460,
                    w: 270,
                    h: 200,
                },
            },
            {
                item: 'viz_VqtvG1yo',
                type: 'block',
                position: {
                    x: 1120,
                    y: 500,
                    w: 260,
                    h: 180,
                },
            },
            {
                item: 'viz_pn7Ah9vW',
                type: 'block',
                position: {
                    x: 230,
                    y: 800,
                    w: 260,
                    h: 180,
                },
            },
            {
                item: 'viz_EXiXRX4U',
                type: 'block',
                position: {
                    x: 1050,
                    y: 760,
                    w: 270,
                    h: 200,
                },
            },
            {
                item: 'viz_SW',
                type: 'block',
                position: {
                    x: 610,
                    y: 740,
                    w: 50,
                    h: 50,
                },
            },
            {
                item: 'viz_SE',
                type: 'block',
                position: {
                    x: 870,
                    y: 710,
                    w: 50,
                    h: 50,
                },
            },
            {
                item: 'viz_NE',
                type: 'block',
                position: {
                    x: 960,
                    y: 560,
                    w: 50,
                    h: 50,
                },
            },
            {
                item: 'viz_NW',
                type: 'block',
                position: {
                    x: 470,
                    y: 560,
                    w: 50,
                    h: 50,
                },
            },
            {
                item: 'viz_QHRzTGFQ',
                type: 'line',
                position: {
                    from: {
                        item: 'viz_pn7Ah9vW',
                        port: 'e',
                    },
                    to: {
                        x: 625,
                        y: 777,
                    },
                },
            },
            {
                item: 'viz_TzwaPrgt',
                type: 'line',
                position: {
                    from: {
                        item: 'viz_HAk44ZUo',
                        port: 'e',
                    },
                    to: {
                        x: 491,
                        y: 587,
                    },
                },
            },
            {
                item: 'viz_Jnx0o633',
                type: 'line',
                position: {
                    from: {
                        x: 900,
                        y: 744,
                    },
                    to: {
                        item: 'viz_EXiXRX4U',
                        port: 'w',
                    },
                },
            },
            {
                item: 'viz_DLUIxOtM',
                type: 'line',
                position: {
                    from: {
                        item: 'viz_NE',
                        port: 'e',
                    },
                    to: {
                        item: 'viz_VqtvG1yo',
                        port: 'w',
                    },
                },
            },
            {
                item: 'viz_vZD1cyae',
                type: 'block',
                position: {
                    x: 910,
                    y: 50,
                    w: 490,
                    h: 270,
                },
            },
            {
                item: 'viz_SoNvsCtV',
                type: 'block',
                position: {
                    x: 80,
                    y: 180,
                    w: 400,
                    h: 120,
                },
            },
            {
                item: 'viz_11f98rjH',
                type: 'block',
                position: {
                    x: 500,
                    y: 40,
                    w: 400,
                    h: 270,
                },
            },
        ],
        globalInputs: [],
    },
    description: '',
    title: 'Custom Modal',
};

const BasicModal = ({ handleRequestClose, modalTitle, open }) => {
    return (
        <Modal onRequestClose={handleRequestClose} open={open} style={{ width: '640px' }}>
            <Modal.Header title={modalTitle} onRequestClose={handleRequestClose} />
            <Modal.Body style={{ padding: 10 }}>
                <span>hello world</span>
            </Modal.Body>
        </Modal>
    );
};

const DashboardExample = () => {
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState('Default title');

    const handleDashboardEvent = ({ type, targetId, originalEvent }) => {
        const [, vizId] = targetId.split('_');
        if (type === 'ellipse.click' || type === 'value.click') {
            originalEvent.preventDefault();
            console.log(vizId, targetId, definition);
            setTitle(vizId);
            setOpenModal(!openModal);
        }
    };

    const handleRequestClose = () => {
        setOpenModal(false);
    };

    return (
        <SplunkThemeProvider>
            <DashboardContextProvider>
                <BasicModal
                    open={openModal}
                    modalTitle={title}
                    handleRequestClose={handleRequestClose}
                />
                <DashboardCore
                    width="100%"
                    height="100%"
                    preset={EnterprisePreset}
                    definition={definition}
                    // Attach a custom event trigger
                    dashboardCorePlugin={{
                        onEventTrigger: handleDashboardEvent,
                    }}
                />
            </DashboardContextProvider>
        </SplunkThemeProvider>
    );
};

export default DashboardExample;
