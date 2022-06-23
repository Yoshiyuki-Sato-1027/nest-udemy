import { Item } from 'src/entities/item.entity';
import { EntityRepository } from 'typeorm';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  
}
