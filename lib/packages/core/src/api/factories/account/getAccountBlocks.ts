/** @module core.api.factories */

/**
 * Copyright (c) 2019 Burst Apps Team
 */
import { BurstService } from '../../../service/burstService';
import { Block } from '../../../typings/block';

/**
 * Use with [[ApiComposer]] and belongs to [[AccountApi]].
 *
 * See details at [[BlockApi.getAccountBlocks]]
 */
export const getAccountBlocks = (service: BurstService):
    (firstIndex?: number, lastIndex?: number) => Promise<Block[]> =>
    (firstIndex?: number, lastIndex?: number): Promise<Block[]> =>
        service.query('getAccountBlocks', {
            firstIndex,
            lastIndex
        });
