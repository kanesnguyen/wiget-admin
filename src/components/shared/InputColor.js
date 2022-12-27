import React, { useState, useCallback,useEffect } from 'react'
import { hslToHex, hexToHsl } from '../../extensions/convertColor'
import { cleanInputColor } from '../../extensions/cleanInputColor'
import {
    Box,
    Text,
    TextField,
    ColorPicker
} from '@shopify/polaris';
function InputColor({title, defaultColor, update}) {
    const [openColor, setOpenColor] = useState(false);
    const [color, setColor] = useState(defaultColor);
    const [value, setValue] = useState(hslToHex(color?.hue, color?.brightness * 100, color?.saturation * 100));
    const handleChange = useCallback((newValue) => 
    {
        setValue(cleanInputColor(newValue));
        update(newValue);
    }
    , [update]);
    useEffect(() => {
        setValue(hslToHex(color?.hue, color?.brightness * 100, color?.saturation * 100))
        update(hslToHex(color?.hue, color?.brightness * 100, color?.saturation * 100));
        //eslint-disable-next-line
    },[color])
    
    return (
        <Box as="div" className="relative">
            <TextField
                label={<Text variant="bodyMd" as="span" fontWeight="semibold">{title}</Text>}
                value={value}
                onChange={handleChange}
                autoComplete="off"
                onBlur={() => { setColor(hexToHsl(value)); setOpenColor(false)}}
            />
            <Box onClick={() => setOpenColor(!openColor)} as="div" className={`rounded-sm h-[36px] w-[36px] absolute right-0 bottom-0 z-[99] cursor-pointer`} style={{ backgroundColor: hslToHex(color?.hue, color?.brightness * 100, color?.saturation * 100) }}></Box>
            {
                openColor && <Box as="div" className="absolute right-0  z-[999]">
                    <ColorPicker onChange={setColor} color={color} />
                </Box>
            }
        </Box>
    )
}

export default InputColor