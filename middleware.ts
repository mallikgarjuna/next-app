import { NextRequest, NextResponse } from "next/server";
// import middleware from "next-auth/middleware";
export {default} from 'next-auth/middleware'; //import and export directly


// // crude implementation of middleware func
// export function middleware(request: NextRequest){
//     return NextResponse.redirect(new URL('/new-page', request.url));
// }

// // we can also use nextauth's middleware func
// // this will redirect the user to login page;
// export default middleware;


// the above middleware func gets executes only when it hits the below endpoitns
export const config = {
    // *: 0 or more
    // +: 1 or more
    // ?: 0 or 1
    matcher: ['/users/:id*', '/dashboard/:path*']
}