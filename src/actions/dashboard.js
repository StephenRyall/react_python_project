import { callAPI } from '../wrappers/APIWrapper';

export const getSomeData = () => {
    return (dispatch) => {
        return callAPI('get', `/dashboard/test`, null).then(testData => {
            console.log("testData" , testData)
            dispatch(setTestData(testData));
        });
    }
};

export const setTestData = (testData) => ({
    type: 'SET_TEST_DATA',
    testData
})