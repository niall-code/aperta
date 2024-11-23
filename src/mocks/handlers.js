import { rest } from "msw";


const baseURL = "https://aperta-api-e412b7c2a211.herokuapp.com/";


export const handlers = [

    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 1,
                username: "Developer",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 1,
                profile_picture:
                    "https://res.cloudinary.com/dlqwhxbeh/image/upload/v1/media/../default-avatar_nqruck.png",
                is_staff: true,
            })
        );
    }),

    rest.get(`${baseURL}suspicious/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 1,
                reason: 9,
                explanation: "",
                post_id: 1,
                post_title: "Post Title",
                post_text: "",
                post_image: "",
                made_at: "18 Nov 2024",
            })
        )
    }),

    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),

];
