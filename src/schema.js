var vaxSchema = {
    "colors": {
        "relation": "#cf3",
        "exprs": "#aaa",
        "expr": "#fff",
        "boolean": "#ff0"
    },
    "types": {
        "Int": null,
        "String": null,
        "FromClause": {
            "color": "@relation"
        },
        "Relation": {
            "color": "@relation",
            "extends": "FromClause"
        },
        "WindowClause": {
            "color": "@relation"
        },
        "Exprs": {
            "color": "@exprs"
        },
        "NullExpr": {
            "color": "@expr"
        },
        "Expr": {
            "color": "@expr",
            "extends": [
                "NullExpr",
                "Exprs"
            ]
        },
        "BooleanExpr": {
            "color": "@boolean",
            "extends": "Expr"
        },
        "NumericExpr": {
            "color": "@expr",
            "extends": "Expr"
        },
        "IdExpr": {
            "color": "@expr",
            "extends": "NumericExpr"
        },
        "TextExpr": {
            "color": "@expr",
            "extends": "Expr"
        },
        "TimestampExpr": {
            "color": "@expr",
            "extends": [
                "Expr"
            ]
        },
        "DateExpr": {
            "color": "@expr",
            "extends": "TimestampExpr"
        },
        "IntervalExpr": {
            "color": "@expr",
            "extends": [
                "Expr"
            ]
        },
        "Table": {
            "color": "@relation",
            "extends": "Relation"
        },
        "Join": {
            "extends": "Table",
            "color": "@relation"
        },
        "ColumnRef": {
            "extends": "Expr",
            "color": "@expr"
        },
        "TextColumnRef": {
            "extends": [
                "ColumnRef",
                "TextExpr"
            ],
            "color": "@expr"
        },
        "NumericColumnRef": {
            "extends": [
                "ColumnRef",
                "NumericExpr"
            ],
            "color": "@expr"
        },
        "BooleanColumnRef": {
            "extends": [
                "ColumnRef",
                "BooleanExpr"
            ],
            "color": "@expr"
        },
        "IdColumnRef": {
            "extends": [
                "NumericColumnRef",
                "IdExpr"
            ],
            "color": "@expr"
        },
        "DateColumnRef": {
            "extends": [
                "ColumnRef",
                "DateExpr"
            ]
        },
        "TimestampColumnRef": {
            "extends": [
                "DateColumnRef",
                "TimestampExpr"
            ],
            "color": "@expr"
        },
        "Column": {
            "extends": "ColumnRef",
            "color": "@expr"
        },
        "TextColumn": {
            "extends": [
                "Column",
                "TextColumnRef"
            ],
            "color": "@expr"
        },
        "NumericColumn": {
            "extends": [
                "Column",
                "NumericColumnRef"
            ],
            "color": "@expr"
        },
        "IdColumn": {
            "extends": [
                "Column",
                "IdColumnRef"
            ],
            "color": "@expr"
        },
        "DateColumn": {
            "extends": [
                "Column",
                "DateColumnRef"
            ],
            "color": "@expr"
        },
        "TimestampColumn": {
            "extends": [
                "Column",
                "TimestampColumnRef"
            ],
            "color": "@expr"
        },
        "Subquery": {
            "extends": "Expr",
            "color": "@expr"
        },
        "NumericSubquery": {
            "extends": [
                "Subquery",
                "NumericColumnRef"
            ],
            "color": "@expr"
        },
        "BooleanSubquery": {
            "extends": [
                "Subquery",
                "BooleanColumnRef"
            ],
            "color": "@expr"
        },
        "TextSubquery": {
            "extends": [
                "Subquery",
                "TextColumnRef"
            ],
            "color": "@expr"
        },
        "DateSubquery": {
            "extends": [
                "Subquery",
                "DateColumnRef"
            ],
            "color": "@expr"
        },
        "Columns": {
            "color": "@exprs",
            "extends": [
                "Exprs"
            ]
        },
        "OrderByColumns": {
            "color": "@exprs",
            "extends": [
                "Columns"
            ]
        },
        "Select": {
            "extends": "Relation",
            "color": "@relation"
        },
        "Identifier": {
            "color": "#0ff"
        },
        "Tbl_Order": {
            "extends": "Table",
            "color": "@relation"
        },
        "Tbl_Customer": {
            "extends": "Table",
            "color": "@relation"
        },
        "Tbl_LegalEntity": {
            "extends": "Table",
            "color": "@relation"
        },
        "Tbl_Claim": {
            "extends": "Table",
            "color": "@relation"
        },
        "Tbl_ClaimOrder": {
            "extends": "Table",
            "color": "@relation"
        },
        "Tbl_ClaimTicketReply": {
            "extends": "Table",
            "color": "@relation"
        },
        "Tbl_OrderTrackInformation": {
            "extends": "Table",
            "color": "@relation"
        }
    },
    "dictionaries": {
        "JoinTypes": {
            "title": "Типы соединений таблиц",
            "values": {
                "INNER": "INNER",
                "LEFT": "LEFT",
                "RIGHT": "RIGHT"
            }
        },
        "AggregateTypes": {
            "title": "Типы аггрегатных функций",
            "values": {
                "MAX": "MAX",
                "MIN": "MIN",
                "AVG": "AVG",
                "COUNT": "COUNT",
                "SUM": "SUM"
            }
        },
        "OrderDeliveryStatuses": {
            "title": "Статусы доставки заказ",
            "values": {
                "delivered": "Доставлен",
                "intransit": "В пути"
            }
        }
    },
    "groups": {
        "core": "Основные элементы",
        "agg": "Аггрегаты",
        "bool": "Логические элементы",
        "cmp": "Сравнения",
        "datetime": "Работа с датой",
        "expr": "Выражения",
        "literal": "Литералы",
        "tables": "Таблицы",
        "TblOrder": "Заказ",
        "TblLegalEntity": "ЮрЛицо",
        "TblClaim": "Претензия",
        "TblOrderTrackInformation": "Трекинг заказа"
    },
    "components": {
        "Select": {
            "group": "core",
            "title": "SELECT",
            "color": "0-#495-#075:20-#335",
            "in": {
                "Cols": "Exprs",
                "FROM": "FromClause",
                "WHERE": "BooleanExpr",
                "ORDER": "OrderByColumns",
                "GROUP": "Exprs",
                "HAVING": "BooleanExpr"
            },
            "attrs": {
                "Alias": "Identifier",
                "LIMIT": "Int",
                "OFFSET": "Int"
            },
            "out": {
                "O": "Select"
            }
        },
        "Subquery": {
            "group": "core",
            "title": "Subquery",
            "typeParams": [
                "T"
            ],
            "in": {
                "S": "Select"
            },
            "attrs": {
                "Alias": "Identifier"
            },
            "out": {
                "O": "@T"
            }
        },
        "SmartJoin": {
            "group": "core",
            "title": "Smart JOIN",
            "color": "0-#495-#075:20-#335",
            "in": {
                "Prev": "FromClause",
                "L": "Relation",
                "R": "Relation",
            },
            "out": {
                "O": "FromClause"
            }
        },
        "PlainJoin": {
            "group": "core",
            "title": "JOIN",
            "color": "0-#495-#075:20-#335",
            "in": {
                "Prev": "FromClause",
                "L": "Relation",
                "R": "Relation",
                "ON": "BooleanExpr"
            },
            "attrs": {
                "Type": {
                    "default": "INNER",
                    "valuePicker": {
                        "type": "dictionary",
                        "dictionary": "JoinTypes"
                    }
                }
            },
            "out": {
                "O": "FromClause"
            }
        },
        "Table": {
            "group": "core",
            "title": "Table",
            "color": "0-#195-#0a5:30-#635",
            "width": 150,
            "attrs": {
                "T": {
                    "title": "Table",
                    "type": "Identifier",
                    "default": "tbl_"
                }
            },
            "out": {
                "O": {
                    "type": "Table"
                }
            }
        },
        "Column": {
            "group": "core",
            "title": "Pick column",
            "color": "0-#32a-#0a5:40-#03a",
            "in": {
                "R": {
                    "title": "Relation",
                    "type": "Relation"
                }
            },
            "attrs": {
                "C": {
                    "title": "Name",
                    "type": "Identifier",
                    "default": "id"
                },
                "A": {
                    "title": "Alias",
                    "type": "Identifier"
                }
            },
            "out": {
                "O": {
                    "type": "Column"
                }
            }
        },
        "AllColumns": {
            "group": "core",
            "title": "*",
            "color": "0-#32a-#0a5:40-#03a",
            "in": {
                "R": {
                    "title": "Relation",
                    "type": "Relation"
                }
            },
            "out": {
                "O": {
                    "type": "Columns"
                }
            }
        },
        "Gather3Columns": {
            "group": "core",
            "title": "Gather 3 columns",
            "color": "0-#32a-#0a5:40-#03a",
            "in": {
                "C1": "Exprs",
                "C2": "Exprs",
                "C3": "Exprs"
            },
            "out": {
                "O": {
                    "type": "Exprs"
                }
            }
        },
        "Gather5Columns": {
            "group": "core",
            "title": "Gather 5 columns",
            "color": "0-#32a-#0a5:40-#03a",
            "in": {
                "C1": "Exprs",
                "C2": "Exprs",
                "C3": "Exprs",
                "C4": "Exprs",
                "C5": "Exprs"
            },
            "out": {
                "O": {
                    "type": "Exprs"
                }
            }
        },
        "Gather10Columns": {
            "group": "core",
            "title": "Gather 10 columns",
            "color": "0-#32a-#0a5:40-#03a",
            "in": {
                "C1": "Exprs",
                "C2": "Exprs",
                "C3": "Exprs",
                "C4": "Exprs",
                "C5": "Exprs",
                "C6": "Exprs",
                "C7": "Exprs",
                "C8": "Exprs",
                "C9": "Exprs",
                "C10": "Exprs"
            },
            "out": {
                "O": {
                    "type": "Exprs"
                }
            }
        },
        "OrderBy": {
            "group": "core",
            "title": "ORDER BY",
            "color": "0-#32a-#0a5:40-#03a",
            "in": {
                "E": {
                    "title": "Expr",
                    "type": "Expr"
                },
                "Prev": {
                    "title": "Prev. order",
                    "type": "OrderByColumns"
                }
            },
            "attrs": {
                "D": {
                    "title": "Direction",
                    "default": "ASC"
                }
            },
            "out": {
                "O": {
                    "type": "OrderByColumns"
                }
            }
        },
        "GroupBy": {
            "group": "core",
            "title": "GROUP BY",
            "color": "0-#32d-#aa5:40-#03a",
            "in": {
                "A": "Expr",
                "B": "Expr",
                "C": "Expr",
                "Prev": "Exprs"
            },
            "out": {
                "O": {
                    "type": "Exprs"
                }
            }
        },
        "Aggregate": {
            "group": "agg",
            "title": "Aggregate",
            "in": {
                "Expr": "Expr",
                "FILTER": "BooleanExpr",
                "OVER": "WindowClause"
            },
            "attrs": {
                "Type": {
                    "valuePicker": {
                        "type": "dictionary",
                        "dictionary": "AggregateTypes"
                    }
                },
                "Alias": "Identifier"
            },
            "out": {
                "O": "Expr"
            }
        },
        "CountAsteriks": {
            "group": "agg",
            "title": "COUNT(*)",
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "cnt"
                }
            },
            "out": {
                "O": "NumericExpr"
            }
        },
        "And": {
            "group": "bool",
            "title": "AND",
            "in": {
                "A": {
                    "title": "A",
                    "type": "BooleanExpr"
                },
                "B": {
                    "title": "A",
                    "type": "BooleanExpr"
                }
            },
            "out": {
                "O": {
                    "title": "AND",
                    "type": "BooleanExpr"
                }
            }
        },
        "Or": {
            "group": "bool",
            "title": "OR",
            "in": {
                "A": {
                    "title": "A",
                    "type": "BooleanExpr"
                },
                "B": {
                    "title": "A",
                    "type": "BooleanExpr"
                }
            },
            "out": {
                "O": {
                    "title": "O",
                    "type": "BooleanExpr"
                }
            }
        },
        "Not": {
            "group": "bool",
            "title": "NOT",
            "in": {
                "I": "BooleanExpr"
            },
            "out": {
                "O": "BooleanExpr"
            }
        },
        "Plus": {
            "group": "expr",
            "title": "+",
            "typeParams": [
                "T"
            ],
            "in": {
                "A": "@T",
                "B": "@T"
            },
            "out": {
                "O": "@T"
            }
        },
        "Minus": {
            "group": "expr",
            "title": "-",
            "typeParams": [
                "T"
            ],
            "in": {
                "A": "@T",
                "B": "@T"
            },
            "out": {
                "O": "@T"
            }
        },
        "Eq": {
            "group": "cmp",
            "title": "=",
            "in": {
                "A": {
                    "title": "A",
                    "type": "Expr"
                },
                "B": {
                    "title": "B",
                    "type": "Expr"
                }
            },
            "out": {
                "O": {
                    "title": "O",
                    "type": "BooleanExpr"
                }
            }
        },
        "NotEq": {
            "group": "cmp",
            "title": "!=",
            "in": {
                "A": {
                    "title": "A",
                    "type": "Expr"
                },
                "B": {
                    "title": "B",
                    "type": "Expr"
                }
            },
            "out": {
                "O": {
                    "title": "O",
                    "type": "BooleanExpr"
                }
            }
        },
        "In": {
            "group": "cmp",
            "title": "IN",
            "in": {
                "E": "Expr",
                "I1": "Expr",
                "I2": "Expr",
                "I3": "Expr",
                "I4": "Expr",
                "I5": "Expr"
            },
            "out": {
                "O": "BooleanExpr"
            }
        },
        "NotIn": {
            "group": "cmp",
            "title": "NOT IN",
            "in": {
                "E": "Expr",
                "I1": "Expr",
                "I2": "Expr",
                "I3": "Expr",
                "I4": "Expr",
                "I5": "Expr"
            },
            "out": {
                "O": "BooleanExpr"
            }
        },
        "Lt": {
            "group": "cmp",
            "title": "<",
            "in": {
                "A": "Expr",
                "B": "Expr"
            },
            "out": {
                "O": "BooleanExpr"
            }
        },
        "LtEq": {
            "group": "cmp",
            "title": "<=",
            "in": {
                "A": "Expr",
                "B": "Expr"
            },
            "out": {
                "O": "BooleanExpr"
            }
        },
        "Gt": {
            "group": "cmp",
            "title": "",
            "in": {
                "A": "Expr",
                "B": "Expr"
            },
            "out": {
                "O": "BooleanExpr"
            }
        },
        "GtEq": {
            "group": "cmp",
            "title": ">=",
            "in": {
                "A": "Expr",
                "B": "Expr"
            },
            "out": {
                "O": "BooleanExpr"
            }
        },
        "Between": {
            "group": "cmp",
            "title": "BETWEEN",
            "in": {
                "E": "Expr",
                "L": "Expr",
                "R": "Expr"
            },
            "out": {
                "O": "BooleanExpr"
            }
        },
        "IsNull": {
            "group": "cmp",
            "title": "IS NULL",
            "in": {
                "I": "Expr"
            },
            "out": {
                "O": "BooleanExpr"
            }
        },
        "IsNotNull": {
            "group": "cmp",
            "title": "IS NOT NULL",
            "in": {
                "I": "Expr"
            },
            "out": {
                "O": "BooleanExpr"
            }
        },
        "null": {
            "group": "literal",
            "title": null,
            "out": {
                "O": "NullExpr"
            }
        },
        "TypedEq": {
            "group": "cmp",
            "title": "Typed =",
            "typeParams": [
                "T"
            ],
            "in": {
                "A": {
                    "title": "A",
                    "type": "@T"
                },
                "B": {
                    "title": "B",
                    "type": "@T"
                }
            },
            "out": {
                "O": {
                    "title": "O",
                    "type": "BooleanExpr"
                }
            }
        },
        "CurrentDate": {
            "group": "datetime",
            "title": "CURRENT_DATE",
            "out": {
                "O": "DateExpr"
            }
        },
        "Interval_NDays": {
            "group": "datetime",
            "title": "Interval N Days",
            "attrs": {
                "N": "Int"
            },
            "out": {
                "O": "IntervalExpr"
            }
        },
        "Interval_NMonths": {
            "group": "datetime",
            "title": "Interval N Months",
            "attrs": {
                "N": "Int"
            },
            "out": {
                "O": "IntervalExpr"
            }
        },
        "GenerateSeries_StartStopInterval": {
            "group": "datetime",
            "title": "generate_series(start,stop,interval)",
            "in": {
                "start": "TimestampExpr",
                "stop": "TimestampExpr",
                "interval": "IntervalExpr"
            },
            "attrs": {
                "Alias": "Identifier"
            },
            "out": {
                "O": "TimestampExpr"
            }
        },
        "AppendDaysToDate": {
            "group": "datetime",
            "title": "Date + N days",
            "in": {
                "A": "DateExpr",
                "B": "NumericExpr"
            },
            "out": {
                "O": "DateExpr"
            }
        },
        "SubtractDaysFromDate": {
            "group": "datetime",
            "title": "Date - N days",
            "in": {
                "A": "DateExpr",
                "B": "NumericExpr"
            },
            "out": {
                "O": "DateExpr"
            }
        },
        "CustomSql": {
            "group": "core",
            "title": "SQL",
            "typeParams": [
                "T"
            ],
            "attrs": {
                "SQL": "@T"
            },
            "out": {
                "O": "@T"
            }
        },
        "Repeat": {
            "group": "core",
            "title": "=>>=",
            "typeParams": [
                "T"
            ],
            "in": {
                "I": "@T"
            },
            "out": {
                "O": "@T"
            }
        },
        "Result": {
            "group": "core",
            "title": "Result",
            "color": "0-#495-#075:20-#335",
            "in": {
                "S": "Select"
            }
        },
        "Tbl_Order": {
            "group": "tables",
            "title": "Тбл.Заказ",
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "o"
                }
            },
            "out": {
                "O": "Tbl_Order"
            }
        },
        "Col_Order_DeliveryStatus": {
            "group": "TblOrder",
            "title": "Заказ.СтатусДоставки",
            "in": {
                "T": "Tbl_Order"
            },
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "delivery_status"
                }
            },
            "out": {
                "O": "TextColumn"
            }
        },
        "Col_Order_DeliveryServiceExternalOrderId": {
            "group": "TblOrder",
            "title": "Заказ.ID заказа в СД",
            "in": {
                "T": "Tbl_Order"
            },
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "ds_id"
                }
            },
            "out": {
                "O": "TextColumn"
            }
        },
        "Col_Order_Cost": {
            "group": "TblOrder",
            "title": "Заказ.ЗаявленнаяСтоимость",
            "in": {
                "T": "Tbl_Order"
            },
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "total_cost_for_recipient"
                }
            },
            "out": {
                "O": "NumericColumn"
            }
        },
        "Col_Order_PaymentSum": {
            "group": "TblOrder",
            "title": "Заказ.Сумма приходов",
            "in": {
                "T": "Tbl_Order"
            },
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "payment_sum"
                }
            },
            "out": {
                "O": "NumericColumn"
            }
        },
        "Col_Order_FirstPaymentDate": {
            "group": "TblOrder",
            "title": "Заказ.Дата первого прихода денег",
            "in": {
                "T": "Tbl_Order"
            },
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "first_oper_date"
                }
            },
            "out": {
                "O": "DateColumn"
            }
        },
        "Col_Order_SendDate": {
            "group": "TblOrder",
            "title": "Заказ.ДатаОтправки",
            "in": {
                "T": "Tbl_Order"
            },
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "send_date"
                }
            },
            "out": {
                "O": "DateColumn"
            }
        },
        "Col_Order_CustomerId": {
            "group": "TblOrder",
            "title": "Заказ.IdКлиента",
            "in": {
                "T": "Tbl_Order"
            },
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "customer_id"
                }
            },
            "out": {
                "O": "IdColumn"
            }
        },
        "Col_Order_Platform": {
            "group": "TblOrder",
            "title": "Заказ.Площадка",
            "in": {
                "T": "Tbl_Order"
            },
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "origin_platform"
                }
            },
            "out": {
                "O": "TextColumn"
            }
        },
        "Dict_Order_DeliveryStatus": {
            "group": "TblOrder",
            "title": "Статус доставки заказа",
            "attrs": {
                "S": {
                    "title": "Статус",
                    "valuePicker": {
                        "type": "dictionary",
                        "dictionary": "OrderDeliveryStatuses"
                    }
                }
            },
            "out": {
                "O": "TextExpr"
            }
        },
        "Tbl_Customer": {
            "group": "tables",
            "title": "Тбл.Клиент",
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "ct"
                }
            },
            "out": {
                "O": "Tbl_Customer"
            }
        },
        "Tbl_LegalEntity": {
            "group": "tables",
            "title": "Тбл.ЮрЛицо",
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "le"
                }
            },
            "out": {
                "O": "Tbl_LegalEntity"
            }
        },
        "LegalEntity_FullName": {
            "group": "TblLegalEntity",
            "title": "Полное имя клиента",
            "in": {
                "T": "Tbl_LegalEntity"
            },
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "le_fullname"
                }
            },
            "out": {
                "O": "TextExpr"
            }
        },
        "Tbl_OrderTrackInformation": {
            "group": "tables",
            "title": "Тбл.ТрекингЗаказа",
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "oti"
                }
            },
            "out": {
                "O": "Tbl_OrderTrackInformation"
            }
        },
        "Col_OrderTrackInformation_Barcode": {
            "group": "TblOrderTrackInformation",
            "title": "ШПИ по трекингу",
            "in": {
                "T": "Tbl_OrderTrackInformation"
            },
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "barcode"
                }
            },
            "out": {
                "O": "TextColumn"
            }
        },
        "Col_OrderTrackInformation_FirstOperDate": {
            "group": "TblOrderTrackInformation",
            "title": "Дата отправки по трекингу",
            "in": {
                "T": "Tbl_OrderTrackInformation"
            },
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "first_oper_date"
                }
            },
            "out": {
                "O": "DateColumn"
            }
        },
        "Tbl_ClaimOrder": {
            "group": "tables",
            "title": "Тбл.ЗаказВПретензии",
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "co"
                }
            },
            "out": {
                "O": "Tbl_ClaimOrder"
            }
        },
        "Col_Claim_ID": {
            "group": "TblClaim",
            "title": "ID претензии",
            "in": {
                "T": "Tbl_Claim"
            },
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "claim_id"
                }
            },
            "out": {
                "O": "IdColumn"
            }
        },
        "Col_Claim_Status": {
            "group": "TblClaim",
            "title": "Статус претензии",
            "in": {
                "T": "Tbl_Claim"
            },
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "claim_status"
                }
            },
            "out": {
                "O": "TextColumn"
            }
        },
        "Col_Claim_Workflow": {
            "group": "TblClaim",
            "title": "Workflow претензии",
            "in": {
                "T": "Tbl_Claim"
            },
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "claim_workflow"
                }
            },
            "out": {
                "O": "TextColumn"
            }
        },
        "Col_Claim_SendDate": {
            "group": "TblClaim",
            "title": "Дата подачи претензии",
            "in": {
                "T": "Tbl_Claim"
            },
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "claim_send_date"
                }
            },
            "out": {
                "O": "DateColumn"
            }
        },
        "Tbl_Claim": {
            "group": "tables",
            "title": "Тбл.Претензия",
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "claim"
                }
            },
            "out": {
                "O": "Tbl_Claim"
            }
        },
        "Tbl_ClaimTicketReply": {
            "group": "tables",
            "title": "Тбл.ПретензионныйОтветПоЗаказу",
            "attrs": {
                "Alias": {
                    "type": "Identifier",
                    "default": "reply"
                }
            },
            "out": {
                "O": "Tbl_ClaimTicketReply"
            }
        }
    }
};