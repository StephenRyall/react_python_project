const dashboardDefaultState = [];

export default (state = dashboardDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEST_DATA':
            return {
                ...state,
                testData: action.testData
            };
        default: 
            return state;
    }
}; 