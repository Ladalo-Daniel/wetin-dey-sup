import { Button, Popover, PopoverTrigger, Listbox, ListboxItem, PopoverContent, useDisclosure } from "@nextui-org/react"
import { BsTrash } from "react-icons/bs"
import { FiCopy, FiEdit } from "react-icons/fi"
import { AiOutlineCheck, AiOutlineMore } from "react-icons/ai"
import useAuthUser from "../CommentsUI/useAuthUser"
import UpdateComment from "../CommentsUI/UpdateComment"

function CommentActionCard({isCopied, copyText, isAuthor}) {
  const {isAuthenticated} = useAuthUser()
  const isSuperAuth = isAuthor && isAuthenticated
  const {onOpenChange, isOpen, onOpen} = useDisclosure()

  return (
    <Popover  placement="top" showArrow={true} className="dark:bg-darkSlate dark:hover:bg-darkSlate">
        <PopoverTrigger>
        <Button className="bg-inherit" >
            <AiOutlineMore size={25} />
        </Button>
        </PopoverTrigger>
        <PopoverContent>
            <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
                <Listbox variant="faded" aria-label="Listbox menu with icons">
                    <ListboxItem
                    className=" dark:hover:bg-darkSlate"
                    key="copy"
                    startContent={isCopied ? <AiOutlineCheck color="green" /> : <FiCopy />}
                    onClick={copyText}
                    >
                    {isCopied ? 'Copied' : 'Copy Comment'}
                    </ListboxItem>
                    {isSuperAuth && <ListboxItem
                    className=" dark:hover:bg-darkSlate"
                    key="edit"
                    onPress={() => onOpenChange(false)}
                    showDivider
                    startContent={<FiEdit />}
                    >
                      <UpdateComment />
                    </ListboxItem>}
                    {isSuperAuth && <ListboxItem
                    className=" dark:hover:bg-darkSlate text-danger"
                    key="delete"
                    color="danger"
                    startContent={<BsTrash />}
                    >
                    Delete comment
                    </ListboxItem>}
                </Listbox>
            </div>
        </PopoverContent>
    </Popover>
  )
}

export default CommentActionCard
