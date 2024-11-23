import { act, render, screen, waitFor } from "@testing-library/react";
import SuspiciousPage from "../SuspiciousPage";

test('shows placeholder image when post_image falsy', () => {
    act(() => {
        render(
            <SuspiciousPage />
        );
    });
    waitFor(() => {
        const image = screen.getByAltText('from reported post');
        expect(image).toHaveAttribute('src', 'https://placehold.co/300x200?text=No+Image');
    })
});
