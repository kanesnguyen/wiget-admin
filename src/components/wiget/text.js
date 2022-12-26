import {
    Card,
    Collapsible,
    Box,
    Icon,
    Text,
    AlphaStack,
    Tabs
} from '@shopify/polaris';
import {
    TextMajor,
    ChevronDownMinor
} from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';

import { connect } from 'react-redux';
function TextWiget(props) {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState(0);
    const tabs = [
        {
            id: 'all-delivery-date-fitted-2',
            content: 'Delivery Date',
            accessibilityLabel: 'All customers',
            panelID: 'all-delivery-date-fitted-2',
        },
        {
            id: 'accepts-store-pickup-fitted-2',
            content: 'Store Pickup',
            panelID: 'accepts-store-pickup-fitted-2',
        },
    ];

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );
    const handleToggle = useCallback(() => setOpen((open) => !open), []);
    return (
        <Box as="div" className="pb-6">
            <Card sectioned>
                <AlphaStack fullWidth>
                    <Box as="div" className="flex items-center justify-between cursor-pointer" onClick={handleToggle}>
                        <Box as="div" className="flex items-center justify-start">
                            <Box as="div" className="p-2">
                                <Icon
                                    source={TextMajor}
                                    color="success" backdrop
                                />
                            </Box>
                            <Text variant="headingMd" as="h2" color="success" fontWeight="semibold">Wiget text</Text>
                        </Box>
                        <Box as="div" className={`p-2 transition duration-300 ease-in-out ${open ? 'rotate-0' : '-rotate-90'}`}>
                            <Icon
                                source={ChevronDownMinor}
                                color="success"
                            />
                        </Box>
                    </Box>
                </AlphaStack>

                <Collapsible
                    open={open}
                    id="basic-collapsible"
                    transition={{ duration: '300ms', timingFunction: 'ease-in-out' }}
                    expandOnPrint
                >
                    <Box as="div" className="pt-5 px-3">
                        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
                            <Card.Section title={tabs[selected].content}>
                                <p>Tab {selected} selected</p>
                            </Card.Section>
                        </Tabs>
                    </Box>
                </Collapsible>
            </Card>
        </Box>
    );
}

const mapStateToProps = (state) => {
    return state.position;
};

export default connect(mapStateToProps)(TextWiget);