import { Distribution } from 'helios-distribution-types'

export interface DistroMeta {

    /**
     * Distribution metadata to be forwarded to the distribution file.
     */
    meta: {
        rss: Distribution['rss']
        discord?: Distribution['discord']
    }

}

export function getDefaultDistroMeta(): DistroMeta {

    return {

        meta: {
            rss: '<LINK TO RSS FEED>',
            discord: {
                clientId: '1045327726472597514',
                smallImageText: 'Join our discord!',
                smallImageKey: 'shibabox_head'
            }
        }
        
    }

}