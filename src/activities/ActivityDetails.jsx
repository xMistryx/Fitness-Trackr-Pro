import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useParams } from "react-router";

export default function ActivityDetails() {
    const { id } = useParams();
    const { data: activity, loading, error } = useQuery(`/activities/${id}`);


    if (loading || !activity) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <section>
                    <ActivityDetailsItem activity={activity} />
            </section>
        </>
    )
}

function ActivityDetailsItem({activity}) {
  const { token } = useAuth();
  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", "/activities/" + activity.id, ["activities"]);

  return (
    <>
        <h1>{activity.name}</h1>
        <p>by {activity.creatorName}</p>
        <p>{activity.description}</p>
        {token && (
            <button onClick={() => deleteActivity()}>
                {loading ? "Deleting" : error ? error : "Delete"}
            </button>
        )}
    </>
  )
}