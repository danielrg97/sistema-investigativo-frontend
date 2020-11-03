import React, { useEffect } from 'react';
import { validateIfHasToken } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { 
    investigativeProjects1Get, 
    investigativeProjects2Get, 
    investigativeProjects3Get 
} from './actions';

const MyDashboardComponent = ({history}) => {
    useEffect(() => {
        validateIfHasToken(history);
    });
    const {loading, error, result1, result2, result3} = useSelector(state => state.dashboardReducer);
    return(
        <div>
            my dashboard
        </div>
    );
};

export default MyDashboardComponent;