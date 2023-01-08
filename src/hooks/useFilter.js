import React, {useMemo} from 'react'

export const useFilter = (searchArray, searchWord, typeFind) => {

    const findObjects = useMemo(() => {
        return searchArray.filter(item => item[typeFind].toLowerCase().includes(searchWord.toLowerCase()))
    }, [searchWord])


    return findObjects
}