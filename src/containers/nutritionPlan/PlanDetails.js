import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPlanByIdAction } from "../../redux/actions/nutritionPlanActions";
import {BiArrowBack} from "react-icons/bi";
import {Button} from "reactstrap";
import { Link } from "react-router-dom";

const PlanDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();

  // dispatch action to get single plan based on plan id at the time of page loading
useEffect(() => {
    dispatch(getPlanByIdAction(params.id));
  }, []);

  // Get specific plan details from store
  const plan = useSelector((state) => state.fakestorePlans.plan);
  console.log(plan);
  // const userId=plan.user['userId']?plan.user['userId']:'';
  return (
    <div className="w-75 mx-auto mt-3" style={{height:"100vh"}}>
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Plan-Description</th>
        <th> Created On</th>
        <th>Updated On</th>
        <th>Price</th>
        {/* <th> User id</th> */}
      </tr>
    </thead>
    <tbody>
        <tr>
          <td>{plan.name}</td>
          <td>{plan.planDescription}</td>
          <td>{plan.created_At}</td>
          <td>{plan.updated_At}</td>
          <td>{plan.price}</td>
          {/* <td>{userId}</td> */}
        </tr>
    </tbody>
  </table>
  <Link  to={`/nutritionPlan`}>
            <Button style={{ margin: '.25rem' }} outline color="primary" size="sm"><BiArrowBack></BiArrowBack></Button>
    </Link>
</div>

  );
};

export default PlanDetails;