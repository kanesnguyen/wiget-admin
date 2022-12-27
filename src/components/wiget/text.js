import {
    Card,
    Collapsible,
    Box,
    Icon,
    Text,
    AlphaStack,
    Tabs,
    TextField
} from '@shopify/polaris';
import {
    TextMajor,
    ChevronDownMinor
} from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';

import { connect, useDispatch } from 'react-redux';
function TextWiget(props) {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState(0);
    const tabs = [
        {
            id: 'all-delivery-date-fitted-2',
            content: 'Delivery Date',
            accessibilityLabel: 'All customers',
            type: 'delivery',
        },
        {
            id: 'accepts-store-pickup-fitted-2',
            content: 'Store Pickup',
            type: 'storepickup',
        },
    ];

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );
    const handleToggle = useCallback(() => setOpen((open) => !open), []);

    const dispatch = useDispatch();

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
                            <Box as="div" className="pt-5 px-3">
                                {
                                    [...Array(Object.keys(props).length).keys()].filter(e => props[Object.keys(props)[e]].type === tabs[selected].type ).map(e => {
                                        const field = props[Object.keys(props)[e]]
                                        if (field.name !== 'dispatch') {
                                            return <Box as="div" className="mb-3" key={field.name}>
                                                <TextField
                                                    label={<Text variant="bodyMd" as="span" fontWeight="semibold">{field.name}</Text>}
                                                    error={field.value.trim() === '' && <Text variant="bodyMd" as="i" color='critical' fontWeight="semibold" className="ml-1 float-right">{field.errorMessage}</Text>}
                                                    value={field.value.trim()}
                                                    onChange={(value) => dispatch({ type: field.action, payload: value })}
                                                    autoComplete="off"
                                                    className="w-full"
                                                />
                                            </Box>
                                        }
                                        else {
                                            return false;
                                        }
                                    })
                                }

                            </Box>
                        </Tabs>
                    </Box>
                </Collapsible>
            </Card>
        </Box>
    );
}

const mapStateToProps = (state) => {
    return state.text;
};

export default connect(mapStateToProps)(TextWiget);