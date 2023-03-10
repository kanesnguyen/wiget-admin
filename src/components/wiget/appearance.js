import {
    Card,
    Select,
    Collapsible,
    Box,
    Icon,
    Text,
    AlphaStack,
} from '@shopify/polaris';
import {
    PaintBrushMajor,
    ChevronDownMinor
} from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';
import InputColor from '../shared/InputColor'
function ApperanceWiget(props) {
    const [open, setOpen] = useState(true);

    const handleToggle = useCallback(() => setOpen((open) => !open), []);
    const dispatch = useDispatch();
    return (
        <Box as="div" className="pb-6">
            <Card sectioned>
                <AlphaStack fullWidth>
                    <Box as="div" className="flex items-center justify-between cursor-pointer" onClick={handleToggle}>
                        <Box as="div" className="flex items-center justify-start">
                            <Box as="div" className="p-2" >
                                <Icon
                                    source={PaintBrushMajor}
                                    color="success" backdrop
                                />
                            </Box>
                            <Text variant="headingMd" as="h2" color="success" fontWeight="semibold">Wiget apperance</Text>
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
                    <Box as="div" className="py-3 sm:py-5 px-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {
                            //eslint-disable-next-line
                            [...Array(Object.keys(props).length).keys()].map(e => {
                                const field = props[Object.keys(props)[e]]
                                if (field.name && field.name !== 'f' && field.name !== 'dispatch') {
                                    if (field.options) {
                                        return <Box as="div" key={field.name}>
                                            <Select
                                                label={<Text variant="bodyMd" as="span" fontWeight="semibold">{field.name}</Text>}
                                                options={field.options}
                                                onChange={(value) => dispatch({ type: field.action, payload: value })}
                                                value={field.value}
                                            />
                                        </Box>
                                    }
                                    else {
                                            return <InputColor
                                            title={field.name}
                                            defaultColor={field.value}
                                            key={field.name}
                                            actionType={field.action}
                                        />
                                    }
                                }
                            })
                        }
                    </Box>
                </Collapsible>
            </Card>
        </Box>
    );
}
const mapStateToProps = (state) => {
    return state.appearance;
};

export default connect(mapStateToProps)(ApperanceWiget);