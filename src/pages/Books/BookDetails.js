import { useHistory, useParams, withRouter } from 'react-router';

const ProjDetails = ({ ...props }) => {

//  const AppState = useSelector((state) => state.App);

  const history = useHistory();
  const params = useParams();

  return (
    <>
      <pre>
        { JSON.stringify(history, null, 2) }
      </pre>
      <pre>
        { JSON.stringify(props, null, 2) }
      </pre>
      <pre>
        { JSON.stringify(params, null, 2) }
      </pre>
    </>
  );
}

export default withRouter(ProjDetails);
