import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from '@/components/Button';

test('should render button', async ({ mount }) => {
    const component = await mount(
        <Button />
    );

    await expect(component).toHaveText('Button');
});