---
title: "Test Post"
date: 2018-03-10T20:39:57Z
draft: false
tags: [C]
categories: [Compilers]
---
## TEST POST

## LIBCCL: Relocatable to Absolute Machine Code
The libccl compiler stores all information required to transform relocatable assembly to absolute assembly in the `struct prco_op_struct`.
<!--https://help.farbox.com/pygments.html-->
<div class="code">
{{< highlight c "linenos=table,hl_lines=19 16 4">}}
struct prco_op_struct {
    // Encoded 16-bit instruction word
    // for printing to file
    unsigned short opcode;

    // Instruction parts
    // (opcode, register selects, immediates, etc.)
    unsigned char op;
    unsigned char regD  : 3;
    unsigned char regA  : 3;
    unsigned char imm8  : 8;
    signed char   simm5 : 5;
    
    // Optional AST pointer to provide extra information
    // function, data type, etc.
    void          *ast;
    
    // Flags
    unsigned int  asm_offset;
    unsigned int  asm_flags;
    char          *comment;
    unsigned int  id;
};
{{< /highlight >}}
</div>

### asm_flags
<div class="code">
{{< highlight c "linenos=table,hl_lines=2 1 7">}}
#define ASM_FUNC_EXIT   0x01
#define ASM_FUNC_START  0x02
#define ASM_IF_BRANCH   0x04
#define ASM_IF_ELSE     0x08
#define ASM_NOP_NOP     0x10
#define ASM_FUNC_CALL   0x20
#define ASM_CALL_NEXT   0x40
{{< /highlight >}}
</div>
