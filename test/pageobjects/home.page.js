import { $ } from '@wdio/globals'

class HomePage {
    get imgCart () {
        return $('//*[@content-desc="test-Cart"]');
    }
}

export default new HomePage();
