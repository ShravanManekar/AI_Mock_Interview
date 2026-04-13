// import React from 'react'
// import {getInterviewById} from "@/lib/actions/general.action";
// import {redirect} from "next/navigation";
//
// const Page =async ( { params}: RouteParams) => {
//     const { id } = await params;
//     const interview = await  getInterviewById(id);
//
//     if(!interview) redirect('/')
//
//     return (
//         <div>Page</div>
//     )
// }
// export default Page

import React from 'react'
import {getInterviewById} from "@/lib/actions/general.action";
import {getCurrentUser} from "@/lib/actions/auth.action";
import {redirect} from "next/navigation";
import Agent from "@/components/Agent";

const Page = async ({ params }: RouteParams) => {
    const { id } = await params;
    const user = await getCurrentUser();
    const interview = await getInterviewById(id);

    if (!interview) redirect('/');

    return (
        <>
            <h3>{interview?.role} Interview</h3>
            <Agent
                userName={user?.name}
                userId={user?.id}
                interviewId={id}
                type="interview"
                questions={interview?.questions}
            />
        </>
    )
}
export default Page