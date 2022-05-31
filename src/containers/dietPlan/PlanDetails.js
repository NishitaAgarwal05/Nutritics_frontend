import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPlanByIdAction } from "../../redux/actions/dietPlanActions";
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
  return (
    <div className="w-75 mx-auto mt-3">
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Slots</th>
        <th>Food Type</th>
        <th>Protein Ratio</th>
        <th>Fat Ratio</th>
        <th>Carbs Ratio</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td>{plan.slots}</td>
          <td>{plan.foodType}</td>
          <td>{plan.proteinRatio}</td>
          <td>{plan.fatRatio}</td>
          <td>{plan.carbsRatio}</td>
          <td>{plan.total}</td>
        </tr>
    </tbody>
  </table>
  <Link  to={`/dietPlan`}>
            <Button style={{ margin: '.25rem' }} outline color="primary" size="sm"><BiArrowBack></BiArrowBack></Button>
    </Link>
</div>

  );
};

export default PlanDetails;