import {
    Card,
    Collapsible,
    Box,
    Checkbox,
    Icon,
    Text,
    AlphaStack
} from '@shopify/polaris';
import {
    IconsMajor,
    ChevronDownMinor
} from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';

import { connect, useDispatch } from 'react-redux';
import {
    toggleShow,
    toggleRequire,
} from '../../actions/actions_postion';
function PositionWiget(props) {
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch();
    const handleToggle = useCallback(() => setOpen((open) => !open), []);
    return (
        <Box as="div" className="pb-6">
            <Card sectioned>
                <AlphaStack fullWidth>
                    <Box as="div" className="flex items-center justify-between cursor-pointer" onClick={handleToggle}>
                        <Box as="div" className="flex items-center justify-start">
                            <Box as="div" className="p-2">
                                <Icon
                                    source={IconsMajor}
                                    color="success" backdrop
                                />
                            </Box>
                            <Text variant="headingMd" as="h2" color="successs" fontWeight="semibold">Wiget position</Text>
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
                        <Box as="div">
                            <Checkbox
                                label="Show the calendar at the product page"
                                checked={props.showCalendar}
                                onChange={(value) => dispatch(toggleShow(value))}
                            />
                        </Box>
                        <Box as="div">
                            <Checkbox
                                label="Require the delivery date befor checkout"
                                checked={props.requireCalendar}
                                onChange={(value) => dispatch(toggleRequire(value))}
                            />
                        </Box>
                    </Box>
                </Collapsible>
            </Card>
        </Box>
    );
}

const mapStateToProps = (state) => {
    return state.position;
};

export default connect(mapStateToProps)(PositionWiget);